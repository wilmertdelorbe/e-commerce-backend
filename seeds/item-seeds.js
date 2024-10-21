const { Item } = require('../../models');

// Sample data for items (products)
const itemData = [
  {
    item_name: 'Casual Polo',
    price: 19.99,
    inventory_count: 30,
    group_id: 1,
  },
  {
    item_name: 'Sport Trainers',
    price: 79.99,
    inventory_count: 20,
    group_id: 5,
  },
  {
    item_name: 'Vintage Snapback',
    price: 24.99,
    inventory_count: 15,
    group_id: 4,
  },
  {
    item_name: 'Wireless Earbuds',
    price: 129.99,
    inventory_count: 40,
    group_id: 3,
  },
  {
    item_name: 'Denim Jeans',
    price: 49.99,
    inventory_count: 25,
    group_id: 2,
  },
];

// Function to seed the item table
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;