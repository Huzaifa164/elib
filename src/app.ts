import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'The api is working' });
});

export default app;