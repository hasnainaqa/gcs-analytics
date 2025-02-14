// /pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectMongoDB } from '@/api-lib/mongodb';
import User from '@/models/users';

await connectMongoDB();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: [
            'openid email profile',
            "https://www.googleapis.com/auth/webmasters"
          ].join(" "),
          access_type: "offline", // ✅ Fix: Allows refresh tokens
          prompt: "consent" // ✅ Fix: Forces user to grant permission

        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        try {
          const { name, email } = user;
          const access_token = account.access_token;

          // Check if user already exists
          let existingUser = await User.findOne({ email });

          if (existingUser) {
            // Update existing user's token
            existingUser.token = access_token;
            await existingUser.save();
          } else {
            // Create a new user if not exists
            await User.create({ name, email, token: access_token });
          }
        } catch (error) {
          console.error('🔴 Error during sign-in:', error);
          return false; // Deny sign-in on error
        }
      }
      return true;
    },

    async session({ session, token }) {
      // Attach access token to session for API use
      if (token?.access_token) {
        session.accessToken = token.access_token;
      }
      return session;
    },

    async jwt({ token, account }) {
      // Save access token in JWT on first login
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },

    async redirect({ baseUrl }) {
      return baseUrl + '/dashboard'; // Redirect to dashboard after successful sign-in
    },
  },

  httpOptions: {
    timeout: 10000, // Increase timeout to 10 seconds for NextAuth requests
  },

  // secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your environment variables
};


export default NextAuth(authOptions);
