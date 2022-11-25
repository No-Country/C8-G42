const services = require("../controllers/services");
const modelName = "Report";
const options = {
  include: ["shelter"],
};

const boom = require("@hapi/boom");

const reportExist = async (req, res, next) => {
  try {
    const { id, reportId } = req.params;

    const report = await services.getById(id || reportId, modelName, options);

    if (!report) {
      throw boom.notFound("Report Not Found");
    }

    req.report = report;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { reportExist };
