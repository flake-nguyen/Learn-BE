const Products = require("../../models/products.models");

module.exports.index = async (req, res) => {
  const products = await Products.find({
    status: "active",
    deleted: false,
  });

  const newProducts = products.map((item) => {
    item.priceNew = (
      (item.price / 100) *
      (100 - item.discountPercentage)
    ).toFixed(0);
    return item;
  });

  res.render("client/pages/products/index", {
    pageTitle: "Danh sach san pham",
    products: newProducts,
  });
};
