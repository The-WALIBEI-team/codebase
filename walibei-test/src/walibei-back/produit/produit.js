var db = require('../db');

var produit = {
	    getproduit: function(callback)
	    {
		            return db.query('SELECT * from produit', callback);
		        },
	    createproduit: function (Produit, callback) {
		            return db.query('Insert into Produit(id_produit, nom, categorie, disponibilite, prix) values(?, ?, ?, ?, ?)',[Produit.id_produit, Produit.nom, Produit.categorie, Produit.disponibilite, Produit.prix], callback);
		        }
}

module.exports = produit;
