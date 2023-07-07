const express = require("express");
const router = express.Router();
const multer = require("multer");


const upload = multer({ dest: '../serveur/assets/' });

const furnitureCtrl= require("../controllers/controllers_articles");
router.get("/articles", furnitureCtrl.getArticles);
router.get("/articles/:_id", furnitureCtrl.getArticlesById);
router.get("/articles/picture/:path", furnitureCtrl.getImage);
router.post("/articles", upload.single("picture"), furnitureCtrl.createArticles);
router.patch("/articles/update/:_id", furnitureCtrl.updateArticles)
router.delete("/articles/delete/:_id", furnitureCtrl.deleteArticles)

module.exports = router;