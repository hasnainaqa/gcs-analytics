import nc from 'next-connect';
import ncOpts from '@/api-lib/nc';
import { connectMongoDB } from '@/api-lib/mongodb';
import User from '@/models/users';

const handler = nc(ncOpts);

handler.post(async (req, res) => {
  try {
    const { name, email, token } = req.body;
    await connectMongoDB();
    await User.create({ name, email, token });
    res.status(201).json({ message: 'User Registered' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

export default handler;
