'use strict';
const { USER_TABLE, userSchema } = require('./../models/user.model');
const { SHELTER_TABLE, shelterSchema } = require('./../models/shelter.model');
const { MESSAGE_TABLE, messageSchema } = require('./../models/message.model');
const { PET_TABLE, petSchema } = require('./../models/pet.model');
const { FAVORITE_PET_TABLE, favoritePetSchema } = require('./../models/favoritePet.model');
const { REQUEST_TABLE, requestSchema } = require('./../models/request.model');
const { REPORT_TABLE, reportSchema } = require('./../models/report.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(SHELTER_TABLE, shelterSchema);
    await queryInterface.createTable(MESSAGE_TABLE, messageSchema);
    await queryInterface.createTable(PET_TABLE, petSchema);
    await queryInterface.createTable(FAVORITE_PET_TABLE, favoritePetSchema);
    await queryInterface.createTable(REQUEST_TABLE, requestSchema);
    await queryInterface.createTable(REPORT_TABLE, reportSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(REPORT_TABLE);
    await queryInterface.dropTable(REQUEST_TABLE);
    await queryInterface.dropTable(FAVORITE_PET_TABLE);
    await queryInterface.dropTable(PET_TABLE);
    await queryInterface.dropTable(MESSAGE_TABLE);
    await queryInterface.dropTable(SHELTER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  }
};
