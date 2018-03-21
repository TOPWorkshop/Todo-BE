const { Sequelize, sequelize } = require('../libraries/db');

const Model = sequelize.define('todo', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Model;
