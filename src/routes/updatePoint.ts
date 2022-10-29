import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

router.get('/updatepoint', () => {});

router.get('/updatepoint/:id', () => {});

router.post(
    '/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
);

router.put(
    '/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {}
);

router.delete('/updatepoint/:id', () => {});

export default router;
