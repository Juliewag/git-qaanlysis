/**
 * Created by julie on 16.06.15.
 */

var qaanalysis = angular.module("qaanalysis",[]);

qaanalysis.controller("AppCtrl", function($http){
    var app = this;
    $http.get("http://localhost:3000").success(function(transcripts){
        app.transcripts = transcripts;
    })
})