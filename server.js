const express = require('express');
var bodyParser = require('body-parser')
const { User } = require('./models');

let router = {
    'get': {
        '/': getRoot,
        '/users': getUsers,
        'users/:uuid': getUser
    },
    'post': {
        '/users': createUser
    }
}

function createServer() {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    return app
}

function setRoutes() {
    let app = createServer();
    for (let httpMethod in router) {
        let routes = router[httpMethod];
        for(let route in routes) {
            let action = routes[route]
            eval(`app.${httpMethod}('${route}', ${action})`)
        }
    }
    return app;
}

function getRoot(req, res) {
    res.send("Hello World");
};

async function createUser(req, res) {
    const {name, email, role} = req.body;
    try {
        const user = await User.create({name, email, role});
        return res.json(user);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

async function getUser(req, res) {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: { uuid }
        });
        return res.json(user);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        return res.json(users);
    } 
    catch(err) {
      console.log(err);
      return res.status(500).json(err);
    }
}

module.exports.expressApp = setRoutes;

