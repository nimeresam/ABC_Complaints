const express = require('express');

const app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('cors')());

// serve the angular app
// app.use(express.static(path.join(__dirname + '\\client\\dist')));

const auth = require('./server/auth');

app.use('/api', 
    require('./server/api/login.routes'),
    auth.verifyToken,
    require('./server/api/complaints.routes'),
    require('./server/api/users.routes')
    );

var server = require('http').createServer(app);

server.listen(2021, () => console.log('Listening to Port: 2021'));