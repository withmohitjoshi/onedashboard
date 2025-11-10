import { Router } from 'express';
import { ROUTES } from '@utils/constants';
import { getAuthRunning, login, getUserDetails, logout, signIn } from '@controllers/auth';
import { validateReq } from '@middlewares/validateReq';
import { loginSchema, signInSchema } from '@utils/reqSchemas';
const router = Router();

router.get('/', getAuthRunning);
router.post(ROUTES.SIGNIN, validateReq(signInSchema), signIn);
router.post(ROUTES.LOGIN, validateReq(loginSchema), login);
router.post(ROUTES.LOGOUT, logout);
router.post(ROUTES.GET_USER_DETAILS, getUserDetails);

export default router;
