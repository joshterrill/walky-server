var express = require("express");
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var path = require("path");
var randomstring = require("randomstring");

app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  var uuid = randomstring.generate(7);
  //res.render('index', { uuid: randomstring.generate(7) });
  res.redirect("/" + uuid);
});

app.get('/:roomId', function(req, res) {
  var roomId = req.params.roomId;
  res.render('index', { uuid: roomId });
}); 


http.listen(port, function(){
    console.log('listening on *:' + port);
});