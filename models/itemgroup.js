const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig.js');

// Defining the ItemGroup model to represent product categories
class ItemGroup extends Model {}

ItemGroup.init(
  {
    // Unique identifier for each item group
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the item group (e.g., Electronics, Clothing)
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item_group',
  }
);

module.exports = ItemGroup;