var express = require('express');
var app = express();

var produitController = require('./produit/produitController');
app.use('/produit', produitController);

module.exports = app;
