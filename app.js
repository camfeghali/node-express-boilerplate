const { sequelize, objectMapping } = require("./models");
const { expressApp } = require("./server");
var cors = require("cors");
const forest = require("forest-express-sequelize");

const port = process.env.PORT || "3000";
const HOST = process.env.HOST || "0.0.0.0";

const app = expressApp();

app.use("^(?!forest/?$).*", cors());

app.get("/", (req, res) => res.send("Hello from ROOTOO!"));

app.listen(port, HOST, async () => {
  console.log(`Listening on port ${port}`);
  await sequelize.authenticate({ force: true });
  console.log("\x1b[33m%s\x1b[0m", "Database connected!");
  await sequelize.sync({ alter: true });
  console.log("\x1b[36m%s\x1b[0m", "Database synced!");

  app.use(
    await forest.init({
      envSecret: process.env.FOREST_ENV_SECRET,
      authSecret: process.env.FOREST_AUTH_SECRET,
      objectMapping: objectMapping,
      connections: { default: sequelize },
    })
  );
});
