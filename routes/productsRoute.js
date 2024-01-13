import express from "express";
import Product from "../models/productModel";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();

// add a new product
router.post("/addProduct", authMiddleware, async (req, res) => {
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
