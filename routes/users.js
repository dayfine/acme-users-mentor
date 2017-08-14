const
  router = require('express').Router(),
  models = require('../models'),
  User = models.User,
  redirect = res => { return () => res.redirect('/users') }

router
  .get('/', (req, res, next) => {
    User.findUsersViewModel()
      .then((users) => res.render('index', {users}))
      .catch(next)
  })

  .post('/', (req, res, next) => {
    User.create(req.body)
      .then(redirect(res))
      .catch(next)
  })

  .delete('/:id', (req, res, next) => {
    User.destroyById(req.params.id)
      .then(redirect(res))
      .catch(next)
  })

  .put('/:id', (req, res, next) => {
    User.updateUserFromReq(req.params.id, req.body)
      .then(redirect(res))
      .catch(next)
  })

  .post('/:id/achievements', (req, res, next) => {
    User.generateAchievement(req.params.id)
      .then(redirect(res))
      .catch(next)
  })

  .delete('/:userId/achievements/:id', (req, res, next) => {
    User.removeAchievement(req.params.userId, req.params.id)
      .then(redirect(res))
      .catch(next)
  })

module.exports = router
