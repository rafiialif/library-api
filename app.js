
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const config = require('./config/Config');

const routes = require('./routes/Routes');

const app = express();

//  TODO: Tambahkan variabel DB yang berasal dari file /config/Config
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors());  //enable cors

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// TODO: Tambahkan definisi path untuk API agar API dapat diakses dengan 
// path `/library`
app.use('/library', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

//  Tambahkan variabel APP_PORT yang berasal dari file /config/Config
app.listen(config.APP_PORT);


module.exports = app;