require('dotenv').config();

module.exports = {
  'host': 'localhost',
  'port': 3030,
  'public': '../public/',
  'postgres': process.env.DB_URL,
  'authentication': {
    'secret': 'this is a very good secret',
    'strategies': [
      'jwt'
    ],
    'path': '/authentication',
    'service': 'users',
    'jwt': {
      'header': {
        'type': 'access'
      },
      'subject': 'anonymous',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    }
  }
};
