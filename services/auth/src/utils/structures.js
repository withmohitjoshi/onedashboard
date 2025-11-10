import { STATUS_CODES } from './constants';
import { isDev } from './function';

export class ApiResponse {
  /**
   * @param {Object} object
   * @param {number} object.statusCode - HTTP status code for the response
   */
  constructor(object) {
    const { statusCode, data, message = 'success' } = object || {};
    this.statusCode = statusCode;
    this.data = data;
    this.message = message.toLowerCase();
    this.success = statusCode < 400;
  }
}

export class ApiError extends Error {
  /**
   * @typedef {Object} ApiErrorOptions
   * @property {number} [statusCode=STATUS_CODES.SERVER_ERROR] - HTTP status code for the error
   * @property {Array} [errors=[]] - Optional array of validation or domain errors
   * @property {string} [message='something went wrong'] - Error message (will be lower-cased)
   * @property {string} [stack=''] - Optional stack trace (used when isDev is true)
   */
  /**
   * @param {ApiErrorOptions} [object]
   */
  constructor(object) {
    const {
      statusCode = STATUS_CODES.SERVER_ERROR,
      errors = [],
      message = 'something went wrong',
      stack = '',
    } = object || {};
    super(message.toLowerCase());
    this.statusCode = statusCode;
    this.data = null;
    this.message = message.toLowerCase();
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ValidationError extends ApiError {
  /**
   * @param {Object} object
   * @param {Array} [object.errors=[]] - Array of validation errors
   * @param {string} [object.message='invalid input'] - Error message
   */
  constructor(object) {
    const { errors = [], message = 'invalid input' } = object;
    super({
      statusCode: STATUS_CODES.BAD_REQUEST,
      message: message.toLowerCase(),
      errors,
    });
  }
}
