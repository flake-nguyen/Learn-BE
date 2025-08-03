const homeRouters = require("./home");
const productRouters = require("./products");

module.exports = (app) => {
  app.use("/", homeRouters);
  app.use("/products", productRouters);
};
