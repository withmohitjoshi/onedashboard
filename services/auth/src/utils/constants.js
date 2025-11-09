export const ROUTES = {
  AUTH: '/auth',
  LOGIN: '/login',
  SIGNIN: '/signin',
  LOGOUT: '/logout',
  GET_USER_DETAILS: '/get-user-details',
};

export const STATUS_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

export const SALT_ROUNDS = 10;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,15}$/;
