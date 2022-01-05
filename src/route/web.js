import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  //gọi đến file homeController sau đó gọi hàm getHomePage

  return app.use("/", router);
};
module.exports = initWebRouter;
