// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/imglist", function (request, response){
  response.send(imgList);
});

var imgList = [
  'https://cdn.glitch.com/520ce8cd-4054-4342-8798-55d85425c830%2F%E3%83%8F%E3%82%9A%E3%82%BD%E3%82%B3%E3%83%B31.jpg?1489760540721',
  'https://cdn.glitch.com/520ce8cd-4054-4342-8798-55d85425c830%2F%E3%83%8F%E3%82%9A%E3%82%BD%E3%82%B3%E3%83%B32.jpeg?1489760540424'
]

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('ポート番号 ' + listener.address().port) + '番で待ち受け中…';
});
