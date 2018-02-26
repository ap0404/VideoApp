const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/gituser', (req, res) => {
  axios.get(`https://api.github.com/users/ap0404`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
module.exports = router;
