const { models } = require("../../utils/database.util");
const boom = require("@hapi/boom");

const getById = async (id, model, options) => {
  const row = await models[model].findByPk(id, options);
  if (row) {
    return row;
  } else {
    throw boom.notFound(`${model} Not Found`);
  }
};

module.exports = {
  getAll: async (model, limit, offset, options) => {
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const table = await models[model].findAll(options);
    return table;
  },
  getById,
  getBy: async (where, model, options) => {
    const row = await models[model].findAll({
      where,
      ...options
    })
    if (row.length > 0) {
      return row
    } else {
      throw boom.notFound(`${model}, ${where}`)
    }
  },
  create: async (model, data) => {
    const row = await models[model].create(data);
    return row;
  },
  update: async (id, model, data) => {
    const row = await getById(id, model);
    const updatedRow = await row.update(data);

    return updatedRow;
  },
  delete: async (id, model) => {
    const rta = await models[model].destroy({
      where: {
        id,
      },
    });
    if (rta !== 0) return { message: "Deleted" };
    else throw boom.notFound(`${model} Not Found`);
  },
};
