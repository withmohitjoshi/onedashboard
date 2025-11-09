import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from './constants';

export function isValidStringWithRegex(regex, str) {
  if (!regex || !str) return false;
  return regex.test(str);
}

export const asyncHandler = requestHandler => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(err => next(err));
  };
};

export async function hashPassword(password) {
  if (!password) throw new Error('Invalid arguments');

  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
  } catch {
    throw new Error('Something went wrong while hashing');
  }
}

export async function comparePassword(password, storedPassword) {
  if (!password || !storedPassword) throw new Error('Invalid arguments');

  try {
    const isMatch = await bcrypt.compare(plaintextPassword, storedHash);
    if (isMatch) return true;
    else return false;
  } catch {
    throw new Error('Something went wrong while comparing');
  }
}
