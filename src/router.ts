import { Router } from 'express';

const router = Router();

/*
    Product Routes
*/
router.get('/product', () => {});
router.get('/product/:id', () => {});
router.post('/product', () => {});
router.put('/product/:id', () => {});
router.delete('/product/:id', () => {});

/*
    Update Routes
*/

router.get('/update', () => {});
router.get('/update/:id', () => {});
router.post('/update', () => {});
router.put('/update/:id', () => {});
router.delete('/update/:id', () => {});

/*
    UpdatePoints Routes
*/

router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.post('/updatepoint', () => {});
router.put('/updatepoint/:id', () => {});
router.delete('/updatepoint/:id', () => {});

export default router;
