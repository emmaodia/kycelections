const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const app = express();

const infoSetRouter = require('./routes/infoSet');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// //set up CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.get('/api/v1/', (req, res, next) => {
  res.status(200).json({
    message: "This is the entry point"
  })
});

app.use('/api/v1/infoSet', infoSetRouter)

//Error Handling set up
app.use((req, res, next) => {
  const error = new Error('404 Page Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
