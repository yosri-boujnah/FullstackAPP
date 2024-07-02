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

db.Client = require('./client.model')(sequelize, DataTypes)
db.Freelances = require('./freelances.model')(sequelize, DataTypes)
db.Talents = require('./talents.model')(sequelize, DataTypes)




module.exports = db;
