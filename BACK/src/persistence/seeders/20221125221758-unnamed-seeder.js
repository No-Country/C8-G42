'use strict';
const { faker } = require("@faker-js/faker")
const { SHELTER_TABLE } = require('./../models/shelter.model');
const { PET_TABLE } = require('./../models/pet.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const shelters = []
    for (let i = 0; i < 6; i++) {
      const shelter = {
        name: faker.company.name(),
        address: faker.address.direction(),
        phone: faker.phone.number(),
        avatar: faker.image.avatar(),
        owner_id: i+1,
      }
      shelters.push(shelter)
    }

    const pets = []
    const sizes = ["small", "medium", "large"]
    for (let i = 0; i < 100; i++) {
      const pet = {
        name: faker.name.firstName(),
        breed: faker.animal.cat(),
        weight: faker.datatype.float({ min: 0.1, max: 100, precision: 0.001 }),
        size: faker.helpers.arrayElement(sizes),
        description: faker.lorem.sentence(5),
        is_sterilized: faker.datatype.boolean(),
        image: faker.image.cats(),
        shelter_id: Math.floor(Math.random()*4),
        status: faker.helpers.arrayElement(["adopted", "available", "inProgress"]),
        user_id: Math.floor(Math.random()*25),
        adopted_date: faker.datatype.datetime(),
        is_visible: faker.datatype.boolean(),
      };
      pets.push(pet)
    }

    await queryInterface.bulkInsert(SHELTER_TABLE, [
      ...shelters
    ]);
    await queryInterface.bulkInsert(PET_TABLE, [
      ...pets
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
