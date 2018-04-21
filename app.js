const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM('index.html').window.document;
var firebase = require("firebase");

//signing in with google
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                document.write('Hello ${user.displayName}');
                console.log(user)
            })
            .catch(console.log)
}
//


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

const preObject = document.getElementById('sensor1');
const sensor1 = firebase.database().ref().child('sensor1');
const sensor2 = firebase.database().ref().child('sensor2');
const sensor3 = firebase.database().ref().child('sensor3');

sensor1.on('value', snap => console.log(snap.val()));
sensor2.on('value', snap => console.log(snap.val()));
sensor3.on('value', snap => console.log(snap.val()));

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

function css(request, response) {
  if (request.url === '/index.css') {
    response.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./css/index.css', {encoding: 'utf8'});
    response.write(fileContents);
  }
} 

fs.readFile('./index.html', (err, html) => 
{
    if(err)
    {
        throw err;
        res.write("File not found");
    }
    const server = http.createServer((req, res) => 
    {
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