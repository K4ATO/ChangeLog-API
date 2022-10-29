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
export default app;
