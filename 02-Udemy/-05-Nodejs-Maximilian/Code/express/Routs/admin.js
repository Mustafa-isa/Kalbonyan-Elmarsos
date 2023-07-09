const Router = require("express").Router()
const path = require("../app")

const bodyParser = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: true }));
Router.use("/product_page", (req, res, next) => {

res.send("helo worlf");

});
Router.post("/product", (req, res, next) => {
res.redirect("/")
  
  
  });
  module.exports =Router