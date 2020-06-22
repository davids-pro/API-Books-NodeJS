const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://erkul:252G9QL8JlmPkZZr:.@dpscalculatordb-amnaw.mongodb.net/BOOKS?retryWrites=true&w=majority';

const cors = require('cors');

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log('Erreur de connexion');
    console.log(err);
  });

const app = express();
const routes = require('./routes/book');

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

module.exports = app;
