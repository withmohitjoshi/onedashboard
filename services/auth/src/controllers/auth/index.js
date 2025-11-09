import { Router } from 'express';
import User from '@models/user';
import { asyncHandler, hashPassword, isValidStringWithRegex } from '@utils/function';
import { EMAIL_REGEX, PASSWORD_REGEX, STATUS_CODES } from '@utils/constants';
import { ApiError, ApiResponse } from '@utils/structures';

export const getAuthRunning = (_, res) => res.send('Auth Service is up and running');

export const login = async (req, res) => {
  // Handle login
};

export const signIn = asyncHandler(async (req, res) => {
  const { body } = req;

  const email = body.email;
  const password = body.password;

  if (!isValidStringWithRegex(EMAIL_REGEX, email)) {
    throw new ApiError({ statusCode: STATUS_CODES.BAD_REQUEST, message: 'Email is invalid' });
  } else if (!isValidStringWithRegex(PASSWORD_REGEX, password)) {
    throw new ApiError({
      statusCode: STATUS_CODES.BAD_REQUEST,
      message: 'Password must be longer than 4 and smaller than 15 charactors',
    });
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({ email, password: hashedPassword });

  const data = await user.save();
  res
    .status(200)
    .json(new ApiResponse({ statusCode: 200, data, message: 'User created successfully' }))
    .end();
});

export const logout = async (req, res) => {
  // Handle logout
};

export const getUserDetails = async (req, res) => {
  // Handle get user details
};
