const Urls = require('../models/urlModel');
const config = require('../config');

// base 58 has '10IO' removed to reduce confusion of users
var chars = '23456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
// const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function getShortUrl(sequence) {
  var shortUrl = '';
  const base = chars.length;
  while(sequence !== 0) {
    shortUrl = chars[sequence%base] + shortUrl;
    sequence = Math.floor(sequence / base);
  }
  return shortUrl;
}

module.exports = {
  getUrls: (req, res) => {
    // Maybe check for null
    const offset = Number(req.query.offset);
    const limit = Number(req.query.limit);
    Urls.find()
      .sort({createdOn: -1})
      .skip(offset)
      .limit(limit)
      .exec((err, urls) => {
        if (err) throw err;
        res.send(urls);
      });
  },

  getUrlById: (req, res) => {
    Urls.findById(req.params.id, (err, url) => {
      if (err) throw err;
      res.send(url);
    });
  },

  getUrlsByUser: (req, res) => {
    Urls.find({user: req.params.user}, (err, urls) => {
      if (err) throw err;
      res.send(urls);
    });
  },

  saveUrl: (req, res) => {
    if (req.body.id) {
      Urls.update({_id: req.body.id}, {
        originalUrl: req.body.originalUrl,
      }, (err, url) => {
        if (err) throw err;
        res.send(url);
      });
    } else {
      Urls.nextCount((err, count) => {
        const newUrl = Urls({
          originalUrl: req.body.originalUrl,
          shortUrl: getShortUrl(count)
        });
        newUrl.save((err) => {
          if (err) throw err;
          res.send('Success');
        });
      });
    }
  },

  deleteUrl: (req, res) => {
    Urls.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;
      res.send('Success');
    });
  }
};