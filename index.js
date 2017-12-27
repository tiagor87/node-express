const express = require('express');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}
const connectionString = process.env.CONNECTION_STRING;

const userData = require('./users/users.data');
const userRouter = require('./users/users.router');

const app = express();
app.use('/users', userRouter(userData(connectionString)));

app.listen(3000);