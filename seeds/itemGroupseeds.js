const { ItemGroup } = require('../../models');

// Define sample data for item groups (categories)
const itemGroupData = [
  { group_name: 'Outerwear' },
  { group_name: 'Pants' },
  { group_name: 'Electronics' },
  { group_name: 'Accessories' },
  { group_name: 'Footwear' },
];

// Function to seed the item_group table
const seedItemGroups = () => ItemGroup.bulkCreate(itemGroupData);

module.exports = seedItemGroups;