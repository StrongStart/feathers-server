// Initializes the `impact` service on path `/impact`
const createService = require('feathers-sequelize');
const createModel = require('../../models/impact.model');
const hooks = require('./impact.hooks');
const filters = require('./impact.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);

  const options = {
    name: 'impact',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/impact', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('impact');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
