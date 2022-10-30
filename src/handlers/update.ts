import prisma from '../modules/db';

export const getUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        },
    });
    res.json({ data: update });
};

export const getUpdates = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            Updates: true,
        },
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.Updates];
    }, []);
    res.json({ data: updates });
};

export const createUpdate = async (req, res) => {
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.id,
        },
    });
    const update = await prisma.update.create({
        data: req.body,
    });
    res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            Updates: true,
        },
    });

    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.Updates];
    }, []);
    const match = updates.find((update) => update.id === req.params.id);
    if (!match) {
        res.json({ message: 'nope' });
    }
    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });
    res.json({ data: updateUpdate });
};

export const deleteUpdate = async (req, res) => {};
