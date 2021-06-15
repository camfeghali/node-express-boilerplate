const { sequelize } = require("./models");
const { expressApp } = require("./server");

const port = 3000;
const HOST = "0.0.0.0";

const app = expressApp();

app.listen(port, HOST, async () => {
  console.log(`Listening on port ${port}`);
  await sequelize.authenticate({ force: true });
  console.log("Database connected!");
});
