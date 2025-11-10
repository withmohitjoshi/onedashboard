import { STATUS_CODES } from '@utils/constants';
import { isDev } from '@utils/function';

export function errorHandler(err, _, res, __) {
  const statusCode = err?.statusCode || STATUS_CODES.SERVER_ERROR;
  const message = err?.message || 'Something went wrong';
  const success = err?.success || false;
  const errors =
    err?.errors?.length > 0 ? err.errors.map(e => e.toString().toLowerCase()) : undefined;
  const stack = isDev() ? err?.stack : undefined;
  return res
    .status(statusCode)
    .json({
      statusCode,
      message,
      success,
      errors,
      stack,
    })
    .end();
}
