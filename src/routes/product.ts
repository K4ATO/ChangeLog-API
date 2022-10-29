import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from '../modules/handleInputErrors';

const router = Router();

router.get('/product', (req, res) => {
    res.json({ message: 'from product' });
});

router.get('/product/:id', () => {});

router.post('/product', body('name').isString(), handleInputErrors, () => {});

router.put(
    '/product/:id',
    body('name').isString(),
    handleInputErrors,
    (req, res) => {}
);

router.delete('/product/:id', () => {});

export default router;
