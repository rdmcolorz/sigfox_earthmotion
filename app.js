const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var firebase = require("firebase");
var express = require('express');
var app = express();
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
var url = require('url');
var path = require('path')

global.document = new JSDOM('index.html').window.document;

var config = 
    {
        apiKey: "AIzaSyAW3kLaAOVwMYr0PBd8xgE42LU-IdE4KSw",
        authDomain: "earthquake-sensors.firebaseapp.com",
        databaseURL: "https://earthquake-sensors.firebaseio.com",
        projectId: "earthquake-sensors",
        storageBucket: "earthquake-sensors.appspot.com",
        messagingSenderId: "264814667469"
    };
    firebase.initializeApp(config);

var database = firebase.database();
const mag1 = database.ref().child('sensor1').child('mag');
mag1.on('value', function(datasnapshot) {
    mag1.innerText = datasnapshot.val();
})

fs.readFile('./index.html', (err, html) => 
{
    if(err) {
        throw err;
        res.write("File not found");
    }
    const server = http.createServer((req, res) => {
        var request = url.parse(req.url, true);
        var action = request.pathname;
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    });
    server.listen(port, hostname, () => 
    {
        console.log('server started on port ' + port);
    });
});