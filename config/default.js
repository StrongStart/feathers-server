require('dotenv').config();

module.exports = {
  'host': 'localhost',
  'port': 3030,
  'public': '../public/',
  'postgres': process.env.DB_URL
};
