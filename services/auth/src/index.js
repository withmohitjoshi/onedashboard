import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { default as authRouter } from '@routes/auth';
import { ROUTES } from '@utils/constants';
import { connectToDB } from '@utils/db';
import { errorHandler } from './middlewares/errorHandler';
import { corsConfig } from '@utils/corsConfig';

// NODE_ENV is set via cross-env in the package.json scripts
// Load environment variables based on the current NODE_ENV
// e.g., .env.development, .env.production
const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}` });
const app = express();

async function main() {
  await connectToDB();
  app.use(cors(corsConfig(process.env.CORS_ALLOWED_ORIGINS)));

  app.use(express.json());

  // auth routes
  app.use(ROUTES.AUTH, authRouter);

  // error handler
  app.use(errorHandler);

  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`Auth service is running on port ${PORT}`));
}

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err.message);
  process.exit(1); // Exit to prevent an unstable state
});

process.on('unhandledRejection', err => {
  console.error('Unhandled Promise Rejection:', err.message);
  process.exit(1);
});

main();
