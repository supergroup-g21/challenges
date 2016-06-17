var express = require('express');
var router = express.Router();
var knex = require('../db/knex')


router.get('/home', function(req, res, next){
  knex('locations').select('*').then(data) => {
    console.log(data);
    res.json(data);
  })
  .catch((err);
console.log(err);
  });
})

// router.post('/locations', function(req, res, next) {
//   console.log(req.body);
//   res.json({ message: "They try to say it ain't what it is, but it do."});
// })

module.exports = router;
