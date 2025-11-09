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
  UNAUTHORIZED: 401,
};

export const SALT_ROUNDS = 10;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX = /^.{4,15}$/;
