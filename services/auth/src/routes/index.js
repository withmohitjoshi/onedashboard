import { Router } from 'express'
import { ROUTES } from '@utils/constants'

const router = Router()

router.get('/', (req, res) => res.send('Auth Service is up and running'))

router.post(ROUTES.LOGIN, (req, res) => {
  // Handle login
})

router.post(ROUTES.SIGNIN, (req, res) => {
  // Handle logout
})
router.post(ROUTES.LOGOUT, (req, res) => {
  // Handle logout
})
router.post(ROUTES.GET_USER_DETAILS, (req, res) => {
  // Handle get user details
})

export default router
