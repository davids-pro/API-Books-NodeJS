const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');

mongoose
  .connect('mongodb+srv://erkul:r0peR56VZdXA0tpb@calculator-qvphp.gcp.mongodb.net/BOOKS?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const routes = require('./routes/book');

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

module.exports = app;
