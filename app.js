const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://erkul:252G9QL8JlmPkZZr@dpscalculatordb-amnaw.mongodb.net/movies?retryWrites=true&w=majority';

const cors = require('cors');

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected');
  })
  .catch(() => {
    console.log('Connexion error');
  });

const app = express();
const routes = require('./routes/movies');

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

module.exports = app;
