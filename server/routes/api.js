var express = require('express');
var router = express.Router();


router.get('/challenges', function(req, res, next) {
  console.log(req);
  res.json({ message: 'Nice get!'});
  //insert get stuff here
})
router.post('/challenges', function(req, res, next) {
  knex
  console.log(req.body)
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
