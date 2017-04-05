const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const urlRoutes = require('./routes/urlRoutes');
const Url = require('./models/urlModel');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.getDbConnectionString());

app.use(express.static(`${__dirname}/public`));

app.get('/:shortUrl', (req, res) => {
  Url.findOneAndUpdate({shortUrl: req.params.shortUrl}, {$inc: {clicks: 1}}, (err, url) => {
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.redirect(config.getWebHost());
    }
  });
});

app.use('/api/url', urlRoutes());

app.listen(port);
console.log(`Listening on port: ${port}`);