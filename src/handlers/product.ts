import { nextTick } from 'process';
import prisma from '../modules/db';

// Get all products for the user
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
        include: {
            Products: true,
        },
    });

    res.json({ data: user.Products });
};

// Get one product
export const getProduct = async (req, res) => {
    const id = req.params.id;

    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id,
        },
    });
    res.json({ data: product });
};

// Create one product
export const createProduct = async (req, res, next) => {
    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id,
            },
        });
        res.json({ data: product });
    } catch (e) {
        next(e);
    }
};

// Update one product
export const updateProduct = async (req, res) => {
    const updatedProduct = await prisma.product.update({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            },
        },
        data: {
            name: req.body.name,
        },
    });
    res.json({ data: updatedProduct });
};

// Delete one product
export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where: {
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            },
        },
    });
    res.json({ data: deleted });
};
