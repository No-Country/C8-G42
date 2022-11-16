const { Shelter } = require("../persistence/models/shelter.model");

const shelterExist = async (req, res, next) => {
  try {
    const { id, shelterId } = req.params;

    const shelter = Shelter.findOne({ where: { id: id || shelterId } });

    if (!shelter) {
      return res.status(404).json({
        status: "error",
        message: "shelter not found",
      });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { shelterExist };
