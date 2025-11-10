import { Router } from 'express';
import { ROUTES } from '@utils/constants';
import { getAuthRunning, login, getUserDetails, logout, signIn } from '@controllers/auth';
const router = Router();

router.get('/', getAuthRunning);
router.post(ROUTES.SIGNIN, signIn);
router.post(ROUTES.LOGIN, login);
router.post(ROUTES.LOGOUT, logout);
router.post(ROUTES.GET_USER_DETAILS, getUserDetails);

export default router;
