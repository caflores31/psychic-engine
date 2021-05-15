// Import the Sequelize constructor from the library
// =========================================================================
const Sequelize = require('sequelize');
//dotenv for local environments
require('dotenv').config();
// connection database, MYSQL information for Username and PW
// ==========================================================================
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;