const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const getById = async (id) => {
  const shelter = await db.models.shelter.findByPk(id, {
    include: ["user"],
  });
  if (shelter) {
    delete shelter.dataValues.user.dataValues.password;
    return shelter;
  } else {
    throw boom.notFound("Shelter Not Found");
  }
};

module.exports = {
  get: async () => {
    const shelters = await db.models.shelter.findAll();
    return shelters;
  },
  getById,
  create: async (shelterData) => {
    const newShelter = await db.models.shelter.create(shelterData);
    return newShelter;
  },
  update: async (id, shelterData, modifiedBy) => {
    const shelter = await getById(id);

    const newData = {
      ...shelter.dataValues,
      ...shelterData,
      modifiedBy: modifiedBy | shelterData.modifiedBy,
    };

    const updatedShelter = await shelter.update(newData);

    return updatedShelter;
  },
  delete: async (id) => {
    const rta = await db.models.shelter.destroy({
      where: {
        id,
      },
    });
    if (rta !== 0) return { message: "Deleted" };
    else throw boom.notFound("Shelter not found");
  },
};
