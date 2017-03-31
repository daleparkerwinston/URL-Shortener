const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('../config');

const Schema = mongoose.Schema;

const dbConnection = mongoose.createConnection(config.getDbConnectionString());
autoIncrement.initialize(dbConnection);

const urlSchema = new Schema({
  originalUrl: String,
  shortUrl: String,
  clicks: {type: Number, default: 0},
  user: {type: String, default: 'everyone'},
  createdOn: {type: Date, default: Date.now}
});

urlSchema.plugin(autoIncrement.plugin, {
  model: 'Url',
  field: 'sequence',
  startAt: 1000,
  incrementBy: 1
});

const Urls = mongoose.model('Urls', urlSchema);

module.exports = Urls;