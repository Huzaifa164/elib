import express, { type NextFunction, type Request, type Response } from 'express';
import type { HttpError } from 'http-errors';
import { config } from './config/config.js';
import createHttpError from 'http-errors';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

const app = express();

app.get('/', (req, res, next) => {
    res.send({ message: 'The api is working' });
});

// Global error handler
app.use(globalErrorHandler);

export default app;