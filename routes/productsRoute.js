import express from "express";
import Product from "../models/productModel.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// add a new product
router.post("/add-product", authMiddleware, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get all products
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      success: true,
      products,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
