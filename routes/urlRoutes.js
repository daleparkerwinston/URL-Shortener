const express = require('express');
const bodyParser = require('body-parser');
const urlsController = require('../controllers/urlController');

module.exports = () => {
  const router = express.Router();
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({extended: true}));

  router.get('/', urlsController.getUrls);
  router.get('/id/:id', urlsController.getUrlById);
  router.get('/user/:user', urlsController.getUrlsByUser);

  router.post('/', urlsController.saveUrl);

  router.delete('/', urlsController.deleteUrl);

  return router;
};