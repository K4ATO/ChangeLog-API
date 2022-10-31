import express from 'express';
import productRoutes from './routes/product';
import updateRoutes from './routes/update';
import updatePointRouts from './routes/updatePoint';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
    every route will be /api/whatever_the_route
    ex: get /api/product:id
*/
app.use('/api/', protect, productRoutes);
app.use('/api/', protect, updateRoutes);
app.use('/api/', protect, updatePointRouts);
app.post('/signup', createNewUser);
app.post('/signin', signIn);
app.use((err, req, res, next) => {
    if (err.type === 'auth') {
        res.status(401).json({ message: 'unauthorized' });
    } else if (err.type === 'input') {
        res.status(400).json({ message: 'invalid input' });
    } else {
        res.status(500).json({ message: 'oop, thats on us' });
    }
});
export default app;
