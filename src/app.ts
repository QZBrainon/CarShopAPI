import express from 'express';
import carRouter from './Routes/CarRoute';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);

app.use(ErrorHandler.handle);

export default app;
