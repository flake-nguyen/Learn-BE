//[GET] /admin/products
const Products = require("../../models/product.model");
module.exports.index = async (req, res) => {
  console.log(req.query.status);

  let filterStatus =[
    {
      name: "Tất cả",
      status:"",
      class:""
    },
     {
      name: "Hoạt dộng",
      status:"active",
      class:""
    },
    {
      name: "Dừng hoạt động",
      status:"inactive",
      class:""
    }
    
  ];

  if(req.query.status)
  {
    const index = filterStatus.findIndex(item => item.status == req.query.status);
    filterStatus[index].class="active";
  }
  else{
    const index = filterStatus.findIndex(item => item.status == "");
    filterStatus[index].class="active";
  }

  let find = {
    deleted: false
  };

  if(req.query.status){
    find.status = req.query.status;
  }

  const products = await Products.find(find);

  //console.log(products);
  res.render("admin/pages/products/index", {
    pageTitle: "Trang san pham",
    products: products,
    filterStatus: filterStatus
  });

};
