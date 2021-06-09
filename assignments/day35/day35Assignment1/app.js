var fs = require('fs')
var path = require('path')
var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()

  var data = 'Request Started At : ' + req.start + ' Requested at : ' + req.requestTime + " ";
  fs.writeFileSync( path.join( __dirname, 'fileLogger.txt' ), data, { encoding: 'utf8', flag: 'a' } ); 
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  req.start = Date.now() 

  var responseText = 'Hello World!<br>'
  responseText += '<p>Request Started : '+ req.start + ' Requested at : ' + req.requestTime + '</p>'
  res.send(responseText)
})

app.listen(3000)