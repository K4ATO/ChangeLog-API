import { Router } from 'express';
import { body, oneOf } from 'express-validator';
const router = Router();

router.get('/update', (req, res) => {
    res.json({ message: 'from update' });
});

router.get('/update/:id', () => {});

router.post(
    '/update',
    body('title').exists().isString(),
    body('body').exists().isString,
    () => {}
);

router.put(
    '/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(),
    () => {}
);

router.delete('/update/:id', () => {});

export default router;
