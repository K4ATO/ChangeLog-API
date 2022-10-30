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
    const { productId, ...rest } = req.body;
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId,
        },
    });
    const update = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            product: { connect: { id: product.id } },
        },
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
    res.json({ data: updatedUpdate });
};

export const deleteUpdate = async (req, res) => {
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
    const deleted = await prisma.update.delete({
        where: {
            id: req.params.id,
        },
    });
    res.json({ data: deleted });
};
