import express from 'express';
import router from './router';
const app = express();

// every route will be /api/whatever_the_route
// ex: get /api/product:id
app.use('/api', router);

export default app;
