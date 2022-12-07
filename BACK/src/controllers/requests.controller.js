const { Request } = require("../persistence/models/request.model");
const { Shelter } = require("../persistence/models/shelter.model");
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
        where: { petId: pet.id },
        include: ["pet", "user"],
      });

      requests.push(requestFind);
    });

    await Promise.all(requestPromises);

    console.log(requests);

    res.status(200).json({
      status: "success",
      data: { requests },
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
};
