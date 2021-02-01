const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
router.post('/magasin', (req, res, next) => {
  db.query(
    'INSERT INTO magasin (id_magasin, adresse, description, disponibilite) VALUES (?,?,?,?,?)',
    [req.body.id_magasin, req.body.adresse, req.body.description, req.body.disponibilite, req.params.nom],
    (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});

router.get('/magasin', function (req, res, next) {
  db.query(
    'SELECT * FROM magasin ',
    [owner, 10*(req.params.page || 0)],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json(results);
      }
    }
  );
});
router.get('/magasin/:id_magasin', function (req, res, next) {
  db.query(
    'SELECT * FROM magasin where id_magasin=?',
    [req.params.id_magasin],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.put('/magasin/:id_magasin', function (req, res, next) {
  db.query(
    'UPDATE magasin SET adresse=?, description=?, disponibilite=?, nom=? WHERE id_magasin=?',
    [req.body.adresse, req.body.description, req.body.disponibilite, req.params.nom, req.params.id_magasin],
    (error) => {
      if (error) {
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});

router.delete('/magasin/:id_magasin', function (req, res, next) {
  db.query(
    'DELETE FROM magasin WHERE id_magasin=?',
    [req.params.id_magasin],
    (error) => {
      if (error) {
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});

 return router;

}

module.exports = createRouter;

