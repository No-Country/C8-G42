const boom = require("@hapi/boom");
const { Shelter } = require("../persistence/models/shelter.model");
const services = require("./services");
const modelName = "Report";
const options = {
  include: ["user"]
};

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
    const { shelter, sessionUser } = req;
    const { message } = req.body;

    const newReport = await services.create(modelName, {
      shelterId: shelter.id,
      message,
      userId: sessionUser.id,
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
    const { report, sessionUser } = req;
    const { message } = req.body;

    const modifiedBy = `${sessionUser.firstName} ${sessionUser.lastName}`;

    await report.update({ message, modifiedBy });

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
    const { report, sessionUser } = req;

    //only the shelter can resolve a report
    const isShelterOwner = await Shelter.findOne({
      where: { id: report.shelterId, ownerId: sessionUser.id },
    });

    if (!isShelterOwner) {
      throw boom.unauthorized("You are not the owner of this shelter");
    }

    const modifiedBy = `${sessionUser.firstName} ${sessionUser.lastName}`;

    await report.update({ status: "resolved", modifiedBy });

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
