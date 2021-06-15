const { User } = require("./models");

function getRoot(req, res) {
  res.send("Hello World");
}

async function createUser(req, res) {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function getUser(req, res) {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

function createServer() {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  return app;
}

function setRoutes() {
  let app = createServer();
  for (let httpMethod in controllers) {
    let routes = controllers[httpMethod];
    for (let route in routes) {
      let action = routes[route];
      console.log("route: ", route, "| action: ", action);
      console.log(`app.${httpMethod}('${route}', ${action})`);
      eval(`app.${httpMethod}('${route}', ${action})`);
    }
  }
  return app;
}

// const routes =
// app.get('/', handlers.getRoot);
// app.post('/users', handlers.createUser);
// app.get('/users', handlers.getUsers)
// app.get('/users/:uuid', handlers.getUser)

module.exports.getRoot = getRoot;
module.exports.createUser = createUser;
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.routes = {
  get: {
    "/": getRoot,
    "/users": getUsers,
    "users/:uuid": getUser,
  },
  post: {
    "/users": createUser,
  },
};
