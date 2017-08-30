const assert = require('assert');
const app = require('../../src/app');

describe('\'impact\' service', () => {
  it('registered the service', () => {
    const service = app.service('impact');

    assert.ok(service, 'Registered the service');
  });
});
