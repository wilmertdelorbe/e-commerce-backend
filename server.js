const express = require('express');
const sequelizeConnection = require('./config/dbconfig');

const apiRoutes = require('./routes/mainRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

// Sync Sequelize models with the database and start the server
sequelizeConnection.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}!`);
  });
});