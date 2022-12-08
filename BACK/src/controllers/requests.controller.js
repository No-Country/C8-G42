const { Pet } = require("../persistence/models/pet.model");
const { Request } = require("../persistence/models/request.model");
const { Shelter } = require("../persistence/models/shelter.model");
const boom = require("@hapi/boom");
const service = require("./services");
const modelName = "Request";

const getSheltersRequests = async (req, res, next) => {
  try {
    const { sessionUser } = req;

    const shelter = await Shelter.findOne({
      where: { ownerId: sessionUser.id },
      include: ["pet"],
    });

    let requests = [];

    const requestPromises = shelter.pet.map(async (pet) => {
      const requestFind = await Request.findAll({
        where: { petId: pet.id, status: "pending" },
        include: ["pet", "user"],
      });

      if (requestFind.length > 0) {
        requests.push(requestFind);
      }
    });

    await Promise.all(requestPromises);

    res.status(200).json({
      status: "success",
      data: { requests },
    });
  } catch (error) {
    next(error);
  }
};

const resolveRequest = async (req, res, next) => {
  try {
    const { sessionUser, request } = req;

    const pet = await Pet.findOne({
      where: { id: request.petId, userId: sessionUser.id },
    });

    if (!pet) {
      throw boom.unauthorized("Only the shelter owner can resolve requests");
    }

    await request.update({ status: "resolved" });

    res.status(200).json({
      status: "success",
      request,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create: async (requestData) => {
    requestData.modifiedBy = requestData.userId;
    const newRequest = await service.create(modelName, requestData);
    return newRequest;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
    return rta;
  },
  getSheltersRequests,
  resolveRequest,
};
