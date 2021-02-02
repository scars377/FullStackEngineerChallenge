import { Router } from 'express';
import users from './users';
import reviews from './reviews';

const router = Router();

router.use('/api/users', users);
router.use('/api/reviews', reviews);

export default router;
