const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: 'localhost',
    dialect: 'mysql'
  });

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.Sequelize = Sequelize;

db.Client = //require the Client model
db.Freelances = //require the Freelances model
db.Talents = //require the Talents model
db.Talents_has_client= // require the Talents_has_client model



module.exports = db;
