import express from 'express';
import { User, createUserSchema } from '../models/User.js';
import { authenticateToken } from '../middleware/auth.js';

export const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const userData = createUserSchema.parse(req.body);
    const userId = await User.create(userData);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(400).json({ message: error instanceof Error ? error.message : 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (!user || !(await User.verifyPassword(password, user.password_hash))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}); 