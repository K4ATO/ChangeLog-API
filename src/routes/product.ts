import { Router } from 'express';

const router = Router();

router.get('/product', (req, res) => {
    res.json({ message: 'from product' });
});
router.get('/product/:id', () => {});
router.post('/product', () => {});
router.put('/product/:id', () => {});
router.delete('/product/:id', () => {});

export default router;
