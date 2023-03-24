'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tickets.init({
    user_id: DataTypes.INTEGER,
    issue_type: DataTypes.INTEGER,
    issue_priority: DataTypes.STRING,
    issue_description: DataTypes.STRING,
    assigned_to: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tickets',
    underscored: true,
  });
  return tickets;
};