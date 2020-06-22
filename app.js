const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://erkul:211205Aub3rg1n3s:.@dpscalculatordb-amnaw.mongodb.net/BOOKS?retryWrites=true&w=majority';

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
    console.log('Erreur de connexion');
  });

const app = express();
const routes = require('./routes/book');

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/', routes);

module.exports = app;
