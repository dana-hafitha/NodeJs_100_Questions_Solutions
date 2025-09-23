const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV;

const allowedEnvs = ['dev', 'test', 'prod'];
if (!env || !allowedEnvs.includes(env)) {
  throw new Error(`NODE_ENV must be one of: [dev,prod,test]`);
}

dotenv.config({ path: path.resolve(__dirname, 'env', `${env}.env`) });

module.exports = {
  env,
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};