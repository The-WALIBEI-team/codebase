const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here
router.post('/utilisateur', (req, res, next) => {
  db.query(
    'INSERT INTO utilisateur (id_utilisateur=?, nom=?, prenom=?, email=?, telephone=?, adresse=?, password=?, date_inscription=?, last_login=?) VALUES (?,?,?,?,?,?,?,?,?)',
    [req.body.id_utilisateur, req.body.nom, req.body.prenom, req.body.email, req.body.telephone, req.body.adresse, req.body.password, req.body.date_inscription, req.body.last_login],
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

router.get('/utilisateur', function (req, res, next) {
  db.query(
    'SELECT * FROM utilisateur ',
    [],
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
router.get('/utilisateur/:id_utilisateur', function (req, res, next) {
  db.query(
    'SELECT * FROM utilisateur where id_utilisateur=?',
    [req.params.id_utilisateur],
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
router.put('/utilisateur/:id_utilisateur', function (req, res, next) {
  db.query(
    'UPDATE utilisateur SET nom=?, nom=?, prenom=?, email=?, telephone=?, adresse=?, password=?, date_inscription=?, last_login=? WHERE id_utilisateur=?',
    [req.body.nom, req.body.prenom, req.body.email, req.body.telephone, req.body.adresse, req.body.password, req.body.date_inscription, req.body.last_login, req.params.id_utilisateur],
    (error) => {
      if (error) {
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'ok'});
      }
    }
  );
});

router.delete('/utilisateur/:id_utilisateur', function (req, res, next) {
  db.query(
    'DELETE FROM utilisateur WHERE id_utilisateur=?',
    [req.params.id_utilisateur],
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

