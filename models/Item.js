const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbconfig');

// Junction model to represent the many-to-many relationship between Items and Attributes
class ItemAttribute extends Model {}

ItemAttribute.init(
  {
    // Unique identifier for each item-attribute association
    item_attribute_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Foreign key referencing the Item model
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'item',
        key: 'item_id',
      },
    },
    // Foreign key referencing the Attribute model
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