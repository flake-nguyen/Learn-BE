const express = require("express");
const database = require("./config/database");
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");
require("dotenv").config();
const systemConfig = require("./config/system");
database.connect();
const app = express();

app.locals.prefixAdmin= systemConfig.prefixAdmin;

const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
