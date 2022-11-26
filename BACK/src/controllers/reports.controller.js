const { Report } = require("../persistence/models/report.model");
const services = require("./services");
const modelName = "Report";
const options = {};

const getReportByShelterId = async (req, res, next) => {
  try {
    const { shelter } = req;
    const { limit, offset } = req.query;

    const reports = await services.getAll(modelName, limit, offset, {
      ...options,
      where: { shelterId: shelter.id },
    });

    res.status(200).json({
      status: "success",
      data: {
        reports,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createReport = async (req, res, next) => {
  try {
    const { shelter } = req;
    const { message } = req.body;

    //get user auth
    let user;

    const newReport = await services.create(modelName,{
      shelterId: shelter.id,
      message,
      userId: user.id,
      status: "pending",
    });

    res.status(201).json({
      status: "success",
      data: {
        newReport,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateReport = async (req, res, next) => {
  try {
    const { report } = req;
    const { message } = req.body;

    await report.update({ message });

    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteReport = async (req, res, next) => {
  try {
    const { report } = req;

    await report.destroy();

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

const resolvedReport = async (req, res, next) => {
  try {
    const { report } = req;

    await report.update({ status: "resolved" });

    res.status(200).json({
      status: "success",
      data: {
        report,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReportByShelterId,
  createReport,
  updateReport,
  deleteReport,
  resolvedReport,
};
