const homeRouters = require("./home.routes");
const productRouters = require("./products.routes");

module.exports = (app) => {
  app.use("/", homeRouters);
  app.use("/products", productRouters);
};
