const { db } = require("../../utils/database.util");
const boom = require("@hapi/boom");

const getById = async (id, model, options) => {
  const row = await db.models[model].findByPk(id, options);
  if (row) {
    return row;
  } else {
    throw boom.notFound(`${model} not found`);
  }
};

module.exports = {
  getAll: async (model, limit, offset, options) => {
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const table = await db.models[model].findAll(options);
    return table;
  },
  getById,
  create: async (model, data) => {
    const row = await db.models[model].create(data);
    return row;
  },
  update: async (id, model, data) => {
    const row = await getById(id, model);
    const updatedRow = await row.update(data);

    return updatedRow;
  },
  delete: async (id, model) => {
    const rta = await db.models[model].destroy({
      where: {
        id,
      },
    });
    if (rta !== 0) return { message: "deleted" };
    else throw boom.notFound(`${model} not found`);
  },
};
