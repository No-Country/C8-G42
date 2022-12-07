const service = require("./services");
const modelName = "Request"

module.exports = {
  create: async (requestData) => {
    requestData.modifiedBy = requestData.userId;
    const newRequest = await service.create(modelName, requestData);
    return newRequest;
  },
  delete: async (id) => {
    const rta = await service.delete(id, modelName);
    return rta
  },
};
