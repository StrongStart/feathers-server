const pothole = require('./pothole/pothole.service.js');
const users = require('./users/users.service.js');
const impact = require('./impact/impact.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(pothole);
  app.configure(users);
  app.configure(impact);
  app.configure(users);
};
