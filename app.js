const express = require('express');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRoutes');

console.log(`\n### Running Env : ${process.env.NODE_ENV} ###\n`);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Routes

app.use('/api/v1/tours', tourRouter);

module.exports = app;