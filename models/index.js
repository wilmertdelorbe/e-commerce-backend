const Item = require('./Item');
const ItemAttribute = require('./ItemAttribute');
const ItemGroup = require('./itemgroup');
const Attribute = require('./Attribute');

// Define associations here
Item.belongsToMany(Attribute, { through: ItemAttribute });
Attribute.belongsToMany(Item, { through: ItemAttribute });
Item.belongsTo(ItemGroup, { foreignKey: 'group_id' });
ItemGroup.hasMany(Item, { foreignKey: 'group_id' });

module.exports = {
  Item,
  ItemAttribute,
  ItemGroup,
  Attribute,
};