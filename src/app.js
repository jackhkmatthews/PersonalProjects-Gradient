'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/stations')

app.listen(3000, function(){
  console.log("The server is running on port 3000")
});
