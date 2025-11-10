import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './constants';
import { ApiError } from './structures';

export function isValidStringWithRegex(regex, str) {
  if (!regex || !str) return false;
  return regex.test(str);
}

export const isDev = () => process.env.NODE_ENV === 'development';
export const isProd = () => process.env.NODE_ENV === 'production';

export const asyncHandler = requestHandler => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
  };
};

export async function hashPassword(password) {
  if (!password) throw new ApiError();
  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  } catch {
    throw new ApiError();
  }
}

export async function comparePassword(password, storedPassword) {
  if (!password || !storedPassword) throw new ApiError();

  try {
    const isMatch = await bcrypt.compare(plaintextPassword, storedHash);
    if (isMatch) return true;
    else return false;
  } catch {
    throw new ApiError();
  }
}
