require('dotenv').config();

module.exports = {
  'host': process.env.HOST,
  'port': 3030,
  'public': '../public/',
  'postgres': process.env.DB_URL,
};
