//models
const { Report } = require("../persistence/models/report.model");

const boom = require("@hapi/boom");

const reportExist = async (req, res, next) => {
  try {
    const { id, reportId } = req.params;

    const report = await Report.findOne({ where: { id: id || reportId } });

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
