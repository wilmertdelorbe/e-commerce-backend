const { ItemAttribute } = require('../models');

const itemAttributeData = [
  { item_id: 1, attribute_id: 1 },
  { item_id: 1, attribute_id: 2 },
  { item_id: 2, attribute_id: 1 },
  { item_id: 2, attribute_id: 3 },
  { item_id: 3, attribute_id: 2 },
  { item_id: 3, attribute_id: 4 },
  { item_id: 4, attribute_id: 3 },
  { item_id: 4, attribute_id: 5 },
  { item_id: 5, attribute_id: 4 },
  { item_id: 5, attribute_id: 5 },
];

const seedItemAttributes = () => ItemAttribute.bulkCreate(itemAttributeData);

module.exports = seedItemAttributes;