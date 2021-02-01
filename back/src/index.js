const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const produit = require('./produits');
const magasin = require('./magasins');
const utilisateur = require('./utilisateurs');

const connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'walibei_pwd',
	  database : 'walibei'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(produit(connection))
  .use(utilisateur(connection))
  .use(magasin(connection));


app.listen(port, () => {
	  console.log(`Express server listening on port ${port}`);
});

