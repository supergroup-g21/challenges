var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('challenges').select('*').then((data) => {
    console.log(data);
    res.json(data);
  })
  .catch((err) => {
    console.log(err);
  })

module.exports = router;
