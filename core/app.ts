// core/app.ts
const express = require('express');
const { updateUserData, fetchUserData } = require('../controller/api');
const authMiddleware = require('../middleware/authMiddleware');
const ApiError = require('../entities/ApiError');
const userRoutes = require('../routes/userRoutes');

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = app;
