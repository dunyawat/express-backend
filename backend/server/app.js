const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company')
const staffRouter = require('./routes/staff')

const app = express();

mongoose.connect('mongodb+srv://tae:1234@cluster0.6m7ew.gcp.mongodb.net/testapidatabase?retryWrites=true&w=majority');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff',staffRouter);

module.exports = app;
