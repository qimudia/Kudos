const kudos = require('../models/kudos');
const users = require('../models/users');

module.exports = function (app) {

  app.get('/api/users', function (req, res) {
   users.find({})
     // .populate("kudos")
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/kudos', function (req, res) {
    kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/users', function (req, res) {
    users.create({
      //userId: req.body.userId,
      name: req.body.name,
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/kudos', function (req, res) {
    kudos.create({
      //userId: req.body.userId,
      senderUserId: req.body.senderUserId,
      receiverUserId: req.body.receiverUserId,
      title: req.body.title,
      body:req.body.body
    })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

}


