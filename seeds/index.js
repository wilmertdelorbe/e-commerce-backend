const seedItemGroups = require('./itemGroup-seeds');
const seedItems = require('./item-seeds');
const seedAttributes = require('./attribute-seeds');
const seedItemAttributes = require('./itemAttribute-seeds');

const sequelize = require('../config/dbconfig');
const { Item, ItemGroup, Attribute, ItemAttribute } = require('../models');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedItemGroups();
    console.log('\n----- ITEM GROUPS SEEDED -----\n');

    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');

    await seedAttributes();
    console.log('\n----- ATTRIBUTES SEEDED -----\n');

    await seedItemAttributes();
    console.log('\n----- ITEM ATTRIBUTES SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();