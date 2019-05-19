const express = require('express');
const body_parser = require('body-parser');

const app = express();

// const businessRouter = require('./routes/business');
// const newsRouter = require('./routes/news');
// const advertsRouter = require('./routes/adverts');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

//set up CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/v1/', (req, res, next) => {
  res.status(200).json({
    message: "This is the entry point"
  })
});

// app.use('/api/v1/business', businessRouter);
// app.use('/api/v1/news', newsRouter);
// app.use('/api/v1/adverts', advertsRouter);
//
// //Database Setup
// const dbConfig = require('./config/db.config.js');
// const mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
//
// mongoose.connect(dbConfig.url)
// .then(()=> {
//   console.log("Successfully connected to the database");
// })
// .catch(err => {
//   console.log(`Could not connect to the database due to ${err}... Exting now!`);
//   process.exit();
// });

module.exports = app;
