import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Create Product Route
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(), 
  createProductController
);

// Update Product Route
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(), 
  updateProductController
);

// Get All Products
router.get("/get-product", getProductController);

// Get Single Product by Slug
router.get("/get-product/:slug", getSingleProductController);

// Get Product Photo
router.get("/product-photo/:pid", productPhotoController);

// Delete Product
router.delete("/delete-product/:pid", deleteProductController);

// Filter Products
router.post("/product-filters", productFiltersController);

// Get Product Count
router.get("/product-count", productCountController);

// Get Products by Page
router.get("/product-list/:page", productListController);

// Search Products
router.get("/search/:keyword", searchProductController);

// Get Related Products
router.get("/related-product/:pid/:cid", realtedProductController);

// Get Products by Category
router.get("/product-category/:slug", productCategoryController);

// Payment Routes
// // Token
// router.get("/braintree/token", braintreeTokenController);

// // Payment
// router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
