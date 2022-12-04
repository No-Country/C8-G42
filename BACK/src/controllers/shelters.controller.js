const service = require("./services")

const modelName = "Shelter"
const options = {
  include: ["owner"]
}

module.exports = {
  get: async (limit, offset) => {
    const shelters = await service.getAll(modelName, limit, offset, options);
    for (const shelter of shelters) {
      delete shelter.dataValues.owner.dataValues.password;
    }
    return shelters;
  },
  getById: async(id) => {
    const shelter = await service.getById(id, modelName, {
      include: ["owner", "chats"]
    })
    delete shelter.dataValues.owner.dataValues.password;
    return shelter
  },
  create: async (shelterData) => {
    shelterData.id = shelterData.ownerId
    const newShelter = await service.create(modelName, shelterData);
    return newShelter;
  },
  update: async (id, shelterData) => {
    const updatedShelter = await service.update(id, modelName, shelterData);
    return updatedShelter;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
    return rta;
  },
};
