const { Attribute } = require('../models');

// Sample data for attributes
const attributeData = [
  { attribute_name: 'Color' },
  { attribute_name: 'Size' },
  { attribute_name: 'Material' },
  { attribute_name: 'Style' },
  { attribute_name: 'Brand' },
];

// Function to seed the attribute table
const seedAttributes = () => Attribute.bulkCreate(attributeData);

module.exports = seedAttributes;