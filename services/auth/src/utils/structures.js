import { STATUS_CODES } from './constants';
import { isDev } from './function';

export class ApiResponse {
  constructor({ statusCode, data, message = 'success' }) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message.toLowerCase();
    this.success = statusCode < 400;
  }
}

export class ApiError extends Error {
  constructor({
    statusCode = STATUS_CODES.SERVER_ERROR,
    errors = [],
    message = 'something went wrong',
    stack = '',
  }) {
    super(message.toLowerCase());
    this.statusCode = statusCode;
    this.data = null;
    this.message = message.toLowerCase();
    this.success = false;
    this.errors = errors;

    if (isDev) {
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
}

export class ValidationError extends ApiError {
  constructor({ errors = [], message = 'invalid input' }) {
    super({
      statusCode: STATUS_CODES.BAD_REQUEST,
      message: message.toLowerCase(),
      errors,
    });
  }
}
