const express = require("express");
const router = express.Router();
const boom = require('@hapi/boom')

router.get("/", async (req, res, next) => {
  next(boom.notFound(`${req.method} ${req.originalUrl} does not exists in our server`));
});


module.exports = router;