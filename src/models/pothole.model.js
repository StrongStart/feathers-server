// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pothole = sequelizeClient.define('pothole', {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    lat: {
      type: Sequelize.NUMBER,
      allowNull: false
    },
    lng: {
      type: Sequelize.NUMBER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  pothole.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pothole;
};
