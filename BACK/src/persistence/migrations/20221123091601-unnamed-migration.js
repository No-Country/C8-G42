'use strict';
const { PET_TABLE, petSchema } = require('./../models/pet.model');
const { FAVORITE_PET_TABLE, favoritePetSchema } = require('./../models/favoritePet.model');
const { REQUEST_TABLE, requestSchema } = require('./../models/request.model');
const { REPORT_TABLE, reportSchema } = require('./../models/report.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PET_TABLE, petSchema);
    await queryInterface.createTable(FAVORITE_PET_TABLE, favoritePetSchema);
    await queryInterface.createTable(REQUEST_TABLE, requestSchema);
    await queryInterface.createTable(REPORT_TABLE, reportSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(REPORT_TABLE);
    await queryInterface.dropTable(REQUEST_TABLE);
    await queryInterface.dropTable(FAVORITE_PET_TABLE);
    await queryInterface.dropTable(PET_TABLE);
  }
};
