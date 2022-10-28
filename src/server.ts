import express from 'express';
import router from './router';
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
app.use('/api', protect, router);
app.post('/signup', createNewUser);
app.post('/signin', signIn);
export default app;
