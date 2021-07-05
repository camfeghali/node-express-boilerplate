const { sequelize } = require("./models");
const { expressApp } = require("./server");
const getUsers = require("./controllers/users").getUsers;

const port = 3000;
const HOST = "0.0.0.0";

const app = expressApp();

app.get("/", (req, res) => res.send("Hello from ROOTOO!"));

app.listen(port, HOST, async () => {
  console.log(`Listening on port ${port}`);
  await sequelize.authenticate({ force: true });
  console.log("\x1b[33m%s\x1b[0m", "Database connected!");
  await sequelize.sync({ alter: true });
  console.log("\x1b[36m%s\x1b[0m", "Database synced!");
});
