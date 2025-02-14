import { google } from 'googleapis';
import { connectMongoDB } from '@/api-lib/mongodb';
import User from '@/models/users';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  await connectMongoDB();

  try {
    const { email, startDate, endDate, siteUrl } = req.body;
      console.log('Making API request:', {
      siteUrl,
      startDate,
      endDate,
    });
    if (!email || !siteUrl || !startDate || !endDate) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fetch user from DB
    const user = await User.findOne({ email });

    if (!user || !user.token) {
      return res.status(401).json({ error: 'Unauthorized: No access token' });
    }

    console.log('User found:', user.email);

    // Initialize Google OAuth2 Client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    
    const SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly'];
    
    // Set credentials with stored token
    oauth2Client.setCredentials({
      access_token: user.token,
    });

    // Ensure the token is still valid, refresh if necessary
    const newToken = await oauth2Client.getAccessToken();
    if (!newToken.token) {
      return res.status(403).json({ error: 'Failed to refresh access token' });
    }

    // Update user's token in DB if refreshed
    if (newToken.token !== user.token) {
      user.token = newToken.token;
      await user.save();
    }

    // Initialize Google Search Console API
    const searchConsole = google.webmasters({
      version: 'v3',
      auth: oauth2Client,
    });
    let allData = [];
    let startRow = 0;
    const rowLimit = 500;

    while (true) {
    // Fetch search analytics data
    const response = await searchConsole.searchanalytics.query({
      siteUrl,
      requestBody: {
          startDate,
          endDate,
          dimensions: ["query", "page", "country", "device", "date"],
          rowLimit,
          startRow,
        },
    });
    if (response.data.rows?.length) {
      allData = [...allData, ...response.data.rows];
      startRow += rowLimit;
    } else {
      break; // Stop if no more data
    }
  }

  res.status(200).json({ totalRows: allData.length, data: allData });
  } catch (error) {
    console.error('Google API Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch data from Google Search Console' });
  }
}
