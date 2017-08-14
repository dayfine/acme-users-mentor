const
  express = require('express'),
  router = express.Router(),
  models = require('../models'),
  User = models.User

router.get('/', function (req, res, next) {
  User.findAll()
  .then(users => {
    let userJSON = users.map(e => JSON.stringify(e.dataValues)).join(',\n')
    res.render('index', { userJSON })
  })
})

module.exports = router
