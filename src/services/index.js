const pothole = require('./pothole/pothole.service.js');
const user = require('./user/user.service.js');
const impact = require('./impact/impact.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(pothole);
  app.configure(user);
  app.configure(impact);
};
