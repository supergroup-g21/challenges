var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var rp = require('request-promise');



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
  var newChall = req.body;

  var latLng = encodeURIComponent(req.body.locationAddress + 'Seattle, WA');
   var path = '/maps/api/geocode/json?address=' + latLng +'&key=AIzaSyDW8t-2UFTsshd7050lwZmnzjQZ_V8iVDQ';
   var options = {
     'method': 'GET',
     'hostname': 'maps.googleapis.com',
     'port': null,
     'uri': 'https://maps.googleapis.com' + path,
     'headers': {
       'content-type': 'application/json',
       'cache-control': 'no-cache'
     }
   }
   rp(options).then(function(coords) {
     console.log(coords);
     var long = JSON.parse(coords).results[0].geometry.location.lng;
     var lat = JSON.parse(coords).results[0].geometry.location.lat;
     knex('locations').insert({lat: lat,
     long: long}).then( function() {
       knex('locations').where({
         lat: lat,
         long: long
       }).first().select('id').then(function(locId) {
         return knex('challenges').insert({title: newChall.title,
           description: newChall.description,
           max_users: newChall.maxChallengers,
           start_time: newChall.startDate,
           location_id: locId.id,
           challenger_id: 1,
            end_time: newChall.startDate});
           console.log(newChall);
           res.json({ message: "Great post." });
       })
    })

  }).catch((err) => {
    console.log(err);
  })

  //req.body looks like {
  //"title":string,
  //"description":string,
  //"maxChallengers":Number,
  //"startDate":Date,
  //"locationAddress":String
  //}
})

module.exports = router;
