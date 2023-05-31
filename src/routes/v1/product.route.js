const router = require("express").Router();
const { productController } = require("../../controllers");
router.get("/getProducts", productController.getProduct);

router.post("/getProductByAttribute", productController.getProductByAttribute);

router.post("/insertProduct", productController.insertProduct);

module.exports = router;
