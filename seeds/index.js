const seedItemGroups = require('./itemGroup-seeds');
const seedItems = require('./item-seeds');
const seedAttributes = require('./attribute-seeds');
const seedItemAttributes = require('./itemAttribute-seeds');

const sequelize = require('../config/dbconfig');

// Main function to seed all tables in the correct order
const seedDatabase = async () => {
  // Reset the database
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE RESET -----\n');

  // Seed tables in order of dependencies
  await seedItemGroups();
  console.log('\n----- ITEM GROUPS SEEDED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n');

  await seedAttributes();
  console.log('\n----- ATTRIBUTES SEEDED -----\n');

  await seedItemAttributes();
  console.log('\n----- ITEM ATTRIBUTES SEEDED -----\n');

  process.exit(0);
};

// Run the seeding process
seedDatabase();