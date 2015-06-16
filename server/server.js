var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());
//app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

var mongoose = require("mongoose");

mongoose.set('debug', true);
var util = require('util');
var db = mongoose.createConnection('localhost', 'qaanalysis');


var TSchema = require('./models/Transcript.js').TranscriptSchema;
var Transcript = db.model('transcripts', TSchema);



app.listen(3000, function(){
    console.log('Express server listening on port 3000');
})

//var server = http.createServer(app);
//
//server.listen(app.get('port'), function(){
//    console.log('Express server listening on port ' + app.get('port'));
//});


app.get('/', function(req,res){
    //res.render('index', { title: 'Qualitative Analysis Tool' });
    //res.send("hi, i am working");
    Transcript.find(function(err, transcripts){
        res.send(transcripts);
    })
});