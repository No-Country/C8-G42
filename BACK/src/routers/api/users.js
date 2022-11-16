const express = require('express');
const router = express.Router();

router.get(
  '/',
  async (req, res, next) => {
    try {
      const user = 'supongamos que soy un usuario';
      return res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
