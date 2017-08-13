const
  conn = require('./conn'),
  User = require('./user'),
  Award = require('./award')

Award.belongsTo(User)
User.hasMany(Award)

const sync = () => conn.sync({ force: true })

const seed = () => {
  let fooCategory
  return Promise.all([
    User.create({ name: 'Gen' }),
    User.create({ name: 'Gon' })
  ])
  .then(([ Gen, Gon ]) => {
    fooCategory = _fooCategory
    return Promise.all([
      Award.create({ name: '123' }),
      Award.create({ name: '456' })
    ])
  })
  .then(([ foo, bar ]) => {
    // return foo.setCategory(fooCategory);
    return Promise.all([
      fooCategory.addProduct(foo),
      fooCategory.addProduct(bar)
    ])
  })
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Award
  }
}
