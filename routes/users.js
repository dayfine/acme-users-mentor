const
  router = require('express').Router(),
  models = require('../models'),
  User = models.User,
  redirect = (res) => { () => res.redirect('/users') }

router
  .get('/', (req, res, next) => {
    User.findUsersViewModel()
      .then((viewModel) => {
        res.render('users', viewModel)
      })
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
    User.updateUserFromRequestBody(req.params.id, req.body)
      .then(redirect(res))
      .catch(next)
  })

  .post('/:id/awards', (req, res, next) => {
    User.generateAward(req.params.id)
      .then(redirect(res))
      .catch(next)
  })

  .delete('/:userId/awards/:id', (req, res, next) => {
    User.removeAward(req.params.userId, req.params.id)
      .then(redirect(res))
      .catch(next)
  })

module.exports = router
