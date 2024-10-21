require('dotenv').config();

const Sequelize = require('sequelize');

// Create a new Sequelize instance based on environment variables
const sequelizeConnection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    decimalNumbers: true,
  },
});
// Test the database connection
sequelizeConnection
  .authenticate()
  .then(() => console.log('Database connection established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelizeConnection;