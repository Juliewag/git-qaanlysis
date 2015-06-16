/**
 * Created by julie on 16.06.15.
 */
/**
 * New node file
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//exports.CodeSchema = new mongoose.Schema({
//	name: String,
//	category: String
//});



exports.SentenceSchema = new mongoose.Schema({
    sentenceid: String,
    sentenceidpath: String,
    sentencetxt: String
});

exports.ParagraphSchema = new mongoose.Schema({
    paragraphid: String,
    paragraphidpath: String,
    phrases:[require('./Transcript.js').SentenceSchema]
});



exports.TranscriptSchema=new mongoose.Schema({
    studyid: {type:String, required:true},
    userid: {type:String, required:true},
    transcripttxt: [require('./Transcript.js').ParagraphSchema],
    codings: [{ type: Schema.ObjectId, ref: 'Coding' }]
});



