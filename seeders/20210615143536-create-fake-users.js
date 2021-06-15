"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "093cc9fe-bc66-4ac4-a738-07d3ca7a6374",
          name: "cooki",
          email: "cooki@gmail.com",
          role: "dev",
          createdAt: "2021-06-14T15:21:57.885Z",
          updatedAt: "2021-06-14T15:21:57.885Z",
        },
        {
          uuid: "093cc9fe-bc66-4ac4-a738-07d3ca7a6374",
          name: "dom",
          email: "dom@gmail.com",
          role: "dancer",
          createdAt: "2021-06-14T15:21:57.885Z",
          updatedAt: "2021-06-14T15:21:57.885Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
