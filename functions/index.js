const functions = require('firebase-functions');
const express = require('express');
const firebase = require('firebase-admin');

const app = express();

const firebaseApp = firebase.initializeApp(functions.config().firebase);

app.get('/',(req, res)=>{
    res.send("<h1>Firebase init</h1>")
})

exports.app = functions.https.onRequest(app);
