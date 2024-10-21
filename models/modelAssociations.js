// Importing our custom models
const Item = require('./Item');
const ItemGroup = require('./itemgroup');
const Attribute = require('./Attribute');
const ItemAttribute = require('./ItemAttribute');

// Setting up model associations for our e-commerce database

// Each Item belongs to an ItemGroup
Item.belongsTo(ItemGroup, {
  foreignKey: 'group_id',
  onDelete: 'CASCADE',
});

// An ItemGroup can have multiple Items
ItemGroup.hasMany(Item, {
  foreignKey: 'group_id',
});

// Items can have multiple Attributes, and Attributes can be applied to multiple Items
Item.belongsToMany(Attribute, {
  through: ItemAttribute,
  foreignKey: 'item_id',
});

Attribute.belongsToMany(Item, {
  through: ItemAttribute,
  foreignKey: 'attribute_id',
});

module.exports = {
  Item,
  ItemGroup,
  Attribute,
  ItemAttribute,
};