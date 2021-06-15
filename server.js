const express = require("express");
var bodyParser = require("body-parser");
const router = require("./controllers");

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  return app;
}

function setRoutes() {
  let app = createServer();
  for (let httpMethod in router) {
    let routes = router[httpMethod];
    for (let route in routes) {
      switch (httpMethod) {
        case "get":
          app.get(route, routes[route]);
          break;
        case "post":
          app.post(route, routes[route]);
          break;
        case "put":
          app.put(route, routes[route]);
          break;
        case "delete":
          app.delete(route, routes[route]);
          break;
      }
    }
  }
  return app;
}

module.exports.expressApp = setRoutes;
