'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('roles', [{
        id: 1,
         role_name: 'Admin',
         created_by: 'admin',
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
        id: 2,
        role_name: 'IT Staff',
        created_by: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        role_name: 'User',
        created_by: 'admin',
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('roles', null, {});
  }
};
