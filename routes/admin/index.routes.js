const systemCofig = require("../../config/system");
const dashboardRouters = require("./dashboard.routes");

module.exports = (app) => {
  const PATH_ADMIN = systemCofig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboardRouters);
};
