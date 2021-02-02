import { Router } from 'express';
import Review from '../models/Review';

const router = Router();

router.route('/').post(async (req, res) => {
  await Review.create(req.body);
  res.end();
});

router
  .route('/:id')
  .all((req, res, next) => {
    res.locals.reviewId = parseInt(req.params.id, 10);
    next();
  })
  .get(async (req, res) => {
    const user = await Review.get(res.locals.reviewId);
    res.json(user);
  })
  .put(async (req, res) => {
    await Review.update(res.locals.reviewId, req.body);
    res.end();
  })
  .delete(async (req, res) => {
    await Review.delete(res.locals.reviewId);
    res.end();
  });

export default router;
