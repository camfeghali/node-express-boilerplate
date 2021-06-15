const express = require('express');
var bodyParser = require('body-parser')
const { sequelize } = require('./models');
const server = require('./server').server;
const controllers = require('./server').routes;
const { expressApp } = require('./server');

const port = 3000;
const HOST = '0.0.0.0';

// const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.get('/', handlers.getRoot);
// app.post('/users', handlers.createUser);
// app.get('/users', handlers.getUsers)
// app.get('/users/:uuid', handlers.getUser)

// console.log(controllers)

const app = expressApp();



app.listen(port, HOST, async () => {
    console.log(`Listening on port ${port}`)
    await sequelize.authenticate({force: true})
    console.log('Database connected!')
});




