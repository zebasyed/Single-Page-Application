/*server.js
   Author: Zeba Syed
   Description: Server-side logic
   packeges to be downloaded: express,http and fs.
*/

var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/pages'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(3000);

console.log('The node application has started!!');

