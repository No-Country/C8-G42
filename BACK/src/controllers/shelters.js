const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");
const service = require("./services")

const shelter = "shelter"
const options = {
  include: ["user"]
}

module.exports = {
  get: async (limit, offset) => {
    const shelters = await service.getAll(shelter, limit, offset, options);
    return shelters;
  },
  getById: async(id) => {
    const shelter = await service.getById(id, shelter, options)
    return shelter
  },
  create: async (shelterData) => {
    const newShelter = await service.create(shelter, shelterData);
    return newShelter;
  },
  update: async (id, shelterData, modifiedBy) => {
    const newData = {
      ...shelterData,
      modifiedBy,
    };
    const updatedShelter = await service.update(id, shelter, newData);
    return updatedShelter;
  },
  delete: async (id) => {
    const rta = await service.delete(id, shelter);
    return rta;
  },
};
