require('dotenv').config();

module.exports = {
  'host': process.env.HOST,
  'port': process.env.PORT,
  'public': '../public/',
  'postgres': process.env.DB_URL,
  'authentication': {
    'secret': process.env.AUTH_SECRET,
    'strategies': [
      'jwt'
    ],
    'path': '/authentication',
    'service': 'users',
    'jwt': {
      'header': {
        'type': 'access'
      },
      'audience': process.env.HOST,
      'subject': 'anonymous',
      'issuer': 'feathers',
      'algorithm': 'HS256',
      'expiresIn': '1d'
    },
    'facebook': {
      'clientID': process.env.FB_CLIENT_ID,
      'clientSecret': process.env.FB_CLIENT_SECRET,
      'successRedirect': '/',
      'scope': [
        'public_profile',
        'email'
      ],
      'profileFields': [
        'id',
        'first_name',
        'last_name',
        'picture',
        'permissions'
      ]
    },
    'cookie': {
      'enabled': true,
      'name': 'feathers-jwt',
      'httpOnly': false,
      'secure': false
    }
  }
};
