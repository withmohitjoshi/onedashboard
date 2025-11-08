import { Router } from 'express';
import User from '@models/user';

export const getAuthRunning = (_, res) => res.send('Auth Service is up and running');

export const login = async (req, res) => {
  // Handle login
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log('🚀 ~ email,password:', email, password);
  const user = new User({ email, password });

  const data = await user.save();
  res.json({ data }).end();
};

export const logout = async (req, res) => {
  // Handle logout
};

export const getUserDetails = async (req, res) => {
  // Handle get user details
};
