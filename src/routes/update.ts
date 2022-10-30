import { Router } from 'express';
import { body, oneOf } from 'express-validator';
import {
    createUpdate,
    deleteUpdate,
    getUpdate,
    getUpdates,
    updateUpdate,
} from '../handlers/update';
const router = Router();

router.get('/update', getUpdates);

router.get('/update/:id', getUpdate);

router.post(
    '/update',
    body('title').exists().isString(),
    body('body').exists().isString,
    body('productId').exists().isString(),
    createUpdate
);

router.put(
    '/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(),
    updateUpdate
);

router.delete('/update/:id', deleteUpdate);

export default router;
