// Initializes the `pothole` service on path `/pothole`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pothole.model');
const hooks = require('./pothole.hooks');
const filters = require('./pothole.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pothole',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pothole', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pothole');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
