// pages/api/gsc/sites.js
import { google } from 'googleapis';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ error: 'Not authenticated' });
    }

    const accessToken = session.accessToken; // Ensure token is stored here

    try {
        const auth = new google.auth.OAuth2();
        auth.setCredentials({ access_token: accessToken });

        const searchConsole = google.searchconsole({ version: 'v1', auth });
        const response = await searchConsole.sites.list();

        const sites = response.data.siteEntry?.map(site => site.siteUrl) || [];
        res.status(200).json({ sites });
    } catch (error) {
        console.error('GSC API Error:', error);
        res.status(500).json({ error: error.message });
    }
}
