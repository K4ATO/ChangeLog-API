import { Router } from 'express';
import { body } from 'express-validator';
import {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
} from '../handlers/product';
import { handleInputErrors } from '../modules/handleInputErrors';

const router = Router();

router.get('/product', getProducts);

router.get('/product/:id', getProduct);

router.post(
    '/product',
    body('name').isString(),
    handleInputErrors,
    createProduct
);

router.put(
    '/product/:id',
    body('name').isString(),
    handleInputErrors,
    updateProduct
);

router.delete('/product/:id', deleteProduct);

export default router;
