import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler.js';
import userRouter from './user/userRouter.js';
import bookRouter from './book/bookRouter.js';

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send({ message: 'The api is working' });
});

app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;