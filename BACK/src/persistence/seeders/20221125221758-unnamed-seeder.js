"use strict";
const fetch = require("node-fetch");
const { faker } = require("@faker-js/faker");
const { SHELTER_TABLE } = require("./../models/shelter.model");
const { PET_TABLE } = require("./../models/pet.model");
const { USER_TABLE } = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const shelters = [];
    for (let i = 0; i < 6; i++) {
      const shelter = {
        name: faker.company.name(),
        address: faker.address.direction(),
        phone: faker.phone.number(),
        avatar: faker.image.avatar(),
        owner_id: i + 1,
      };
      shelters.push(shelter);
    }

    const pets = [];
    const sizes = ["small", "medium", "large"];
    for (let i = 0; i < 100; i++) {
      const random = Math.floor(Math.random() * 2 + 1);
      const animalFamily = random === 1 ? "cat" : "dog";
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      const pet = {
        name: faker.name.firstName(),
        breed: faker.animal[animalFamily](),
        weight: faker.datatype.float({ min: 0.1, max: 100, precision: 0.001 }),
        size: faker.helpers.arrayElement(sizes),
        family: animalFamily,
        description: faker.lorem.sentence(5),
        is_sterilized: faker.datatype.boolean(),
        image:
          animalFamily === "cat"
            ? faker.image.cats(640, 480, true)
            : json.message,
        shelter_id: Math.floor(Math.random() * 3 + 1),
        status: faker.helpers.arrayElement([
          "adopted",
          "available",
          "inProgress",
        ]),
        user_id: Math.floor(Math.random() * 25 + 1),
        adopted_date: faker.datatype.datetime(),
        is_visible: faker.datatype.boolean(),
      };
      pets.push(pet);
    }

    await queryInterface.bulkInsert(SHELTER_TABLE, [...shelters]);
    await queryInterface.bulkInsert(PET_TABLE, [...pets]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(USER_TABLE, null, {});
    await queryInterface.bulkDelete(SHELTER_TABLE, null, {});
    await queryInterface.bulkDelete(PET_TABLE, null, {});
  },
};
