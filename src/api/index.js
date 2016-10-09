'use strict';

var express = require('express');
var stations = require('../../mock/stations.json')
var passengers = require('../../mock/passengers.json')

var router = express.Router();

router.get('/stations', function(req,res){
  res.json(stations);
});

router.get('/passengers', function(req,res){
  res.json(passengers);
});

module.exports = router;
