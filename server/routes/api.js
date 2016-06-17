var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


router.get('/challenges', function(req, res, next) {
  knex('challenges').select('*').then((data) => {
    console.log(data);
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
  });
})

router.post('/challenges', function(req, res, next) {
  console.log(req.body);
  res.json({ message: "Great post." });
  //req.body looks like {
  //"title":string,
  //"description":string,
  //"maxChallengers":Number,
  //"startDate":Date,
  //"locationAddress":String
  //}
})

module.exports = router;
