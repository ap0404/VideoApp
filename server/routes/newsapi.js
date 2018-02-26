const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('9114f1643101450db116a1dca3573b2e');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/topheadlines', (req, res) => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9114f1643101450db116a1dca3573b2e`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
module.exports = router;

