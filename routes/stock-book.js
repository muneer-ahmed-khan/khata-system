// import express router
const express = require("express");
const router = express.Router();

// import stock book controller
const stockBookController = require("../controllers/stock-book");

// get all roznamchas
router.get("/stock-book", stockBookController.getStockBook);

// get all stock book search by date
router.get("/search-stock-book", stockBookController.SearchStockBook);

// post stock book search by date
router.post("/post-search-stock-book", stockBookController.PostSearchStockBook);

// add stock-book get and post route
router.get("/add-stock-book", stockBookController.addStockBook);
router.post("/add-stock-book", stockBookController.postAddStockBook);

// edit stock-book get and post route
router.get(
  "/edit-stock-book/:stockBookId",
  stockBookController.getEditStockBook
);
router.post("/edit-stock-book", stockBookController.postEditStockBook);

// delete stock-book
router.post("/delete-stock-book", stockBookController.postDeleteStockBook);

module.exports = router;
