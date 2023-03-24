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

    await queryInterface.bulkInsert('ms_issue_types', [{
       type_name: 'Internet Connection',
       created_by: 'admin',
       created_at: new Date,
       updated_at: new Date,
      },
      {
        type_name: 'Computer Problem',
        created_by: 'admin',
        created_at: new Date,
        updated_at: new Date,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ms_issue_types', null, {});
  }
};
