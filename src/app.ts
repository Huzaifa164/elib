import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import userRouter from './user/userRouter.js';

const app = express();

app.get('/', (req, res, next) => {
    res.send({ message: 'The api is working' });
});

app.use('/api/users', userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;