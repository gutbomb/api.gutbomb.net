"use strict";
module.exports = function (app) {
  const mailController = require("../controllers/mailController");
  const macController = require("../controllers/macController");

  app.route("/api/mail").post(mailController.send);

  app.route("/api/mac/:mac").get(macController.getPassword);
};
