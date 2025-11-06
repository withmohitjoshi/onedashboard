import express from 'express'
import dotenv from 'dotenv'
import { default as authRouter } from '@routes'
import { ROUTES } from '@utils/constants'

// NODE_ENV is set via cross-env in the package.json scripts
// Load environment variables based on the current NODE_ENV
// e.g., .env.development, .env.production
const env = process.env.NODE_ENV
dotenv.config({ path: `.env.${env}` })

const app = express()
app.use(express.json())

app.use(ROUTES.AUTH, authRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Auth service is running on port ${PORT}`))
