const assert = require('assert');
const app = require('../../src/app');

describe('\'pothole\' service', () => {
  it('registered the service', () => {
    const service = app.service('pothole');

    assert.ok(service, 'Registered the service');
  });
});
