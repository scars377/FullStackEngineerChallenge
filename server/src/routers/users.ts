import { Router } from 'express';
import Review from '../models/Review';
import User from '../models/User';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const list = await User.list();
    res.json(list);
  })
  .post(async (req, res) => {
    await User.create(req.body);
    res.end();
  });

router
  .route('/:id')
  .all((req, res, next) => {
    res.locals.userId = parseInt(req.params.id, 10);
    next();
  })
  .get(async (req, res) => {
    const user = await User.get(res.locals.userId);
    res.json(user);
  })
  .put(async (req, res) => {
    await User.update(res.locals.userId, req.body);
    res.end();
  })
  .delete(async (req, res) => {
    await User.delete(res.locals.userId);
    res.end();
  });

router.get('/:id/reviews', async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const reviews = await Review.list(userId);
  res.json(reviews);
});

export default router;
