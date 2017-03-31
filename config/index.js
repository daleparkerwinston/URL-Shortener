const configValues = require('./config.json');

module.exports = {
  getDbConnectionString: () => {
    return `mongodb://${configValues.dbUser}:${configValues.dbPass}@${configValues.db}`
  },
  getWebHost: () => {
    return configValues.webHost
  }
};