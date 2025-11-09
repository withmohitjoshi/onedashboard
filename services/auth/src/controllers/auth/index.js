import User from '@models/user';
import { asyncHandler, hashPassword, isValidStringWithRegex } from '@utils/function';
import { EMAIL_REGEX, PASSWORD_REGEX, STATUS_CODES } from '@utils/constants';
import { ApiError, ApiResponse, ValidationError } from '@utils/structures';

export const getAuthRunning = (_, res) => res.send('Auth Service is up and running');

export const signIn = asyncHandler(async (req, res) => {
  const { body } = req;

  const email = body.email;
  const password = body.password;

  if (!email || !password)
    throw new ValidationError({ errors: ['email and password is required'] });

  if (!isValidStringWithRegex(EMAIL_REGEX, email))
    throw new ValidationError({ errors: ['email is invalid'] });

  if (!isValidStringWithRegex(PASSWORD_REGEX, password))
    throw new ValidationError({
      errors: [
        'password must be between 1 and 15 characters, and contain at least one uppercase letter, one lowercase letter, and one number.',
      ],
    });

  const doesUserExists = await User.findOne({
    $or: [{ email }],
  });

  if (doesUserExists)
    throw new ApiError({
      statusCode: STATUS_CODES.CONFLICT,
      message: 'email already in use',
    });

  const hashedPassword = await hashPassword(password);
  const user = new User({ email, password: hashedPassword });

  await user.save();
  res
    .status(STATUS_CODES.SUCCESS)
    .json(
      new ApiResponse({ statusCode: STATUS_CODES.SUCCESS, message: 'user created successfully' }),
    )
    .end();
});

export const login = async (req, res) => {
  // Handle login
};

export const logout = async (req, res) => {
  // Handle logout
};

export const getUserDetails = async (req, res) => {
  // Handle get user details
};
