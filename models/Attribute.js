const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig.js');

// Defining the Attribute model to represent various characteristics of items
class Attribute extends Model {}

Attribute.init(
  {
    // Unique identifier for each attribute
    attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the attribute (e.g., Color, Size, Material)
    attribute_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attribute',
  }
);

module.exports = Attribute;