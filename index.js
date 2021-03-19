const express = require('express');

const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('cors')());

// serve the angular app
app.use(express.static(path.join(__dirname + '\\client\\dist')));

const auth = require('./server/auth');

// app.use('/api', 
    // auth.verifyToken
    // require('')
    // );

var server = require('http').createServer(app);

server.listen(2020, () => console.log('Listening to Port: 2020'));