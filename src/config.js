const { config } = require('dotenv');
config();

const COINBASE_API_KEY = process.env.COINBASE_API_KEY;
const COINBASE_WEBHOOK_SECRET = process.env.COINBASE_WEBHOOK_SECRET;
const DOMAIN = process.env.DOMAIN || 'http://localhost:3000';

module.exports = {
  COINBASE_API_KEY,
  COINBASE_WEBHOOK_SECRET,
  DOMAIN
}