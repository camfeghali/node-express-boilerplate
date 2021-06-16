const { sequelize } = require("./models");
const { expressApp } = require("./server");
const getUsers = require("./controllers/users").getUsers;

const port = 3000;
const HOST = "0.0.0.0";

const app = expressApp();

app.get("/", (req, res) => res.send("Hello from ROOT!"));

app.listen(port, HOST, async () => {
  console.log(`Listening on port ${port}`);
  await sequelize.authenticate({ force: true });
  console.log("Database connected!");
});
