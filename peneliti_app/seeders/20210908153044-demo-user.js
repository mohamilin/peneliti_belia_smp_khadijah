"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "admin",
          password: bcrypt.hashSync("12345", 8),
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Kelas 8D",
          password: bcrypt.hashSync("12345", 8),
          role: 'kelas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
