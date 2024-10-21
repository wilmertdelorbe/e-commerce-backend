const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

class ItemAttribute extends Model {}

ItemAttribute.init(
  {
    item_attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
        key: 'item_id',
      },
    },
    attribute_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'attribute',
        key: 'attribute_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'item_attribute',
  }
);

module.exports = ItemAttribute;