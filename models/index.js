const
  conn = require('./conn'),
  User = require('./user'),
  Achievement = require('./achievement')

Achievement.belongsTo(User)
User.hasMany(Achievement)
User.hasOne(User, { as: 'Mentor' })
User.belongsTo(User, { as: 'Mentee' })

const sync = () => conn.sync({ force: true })

const seed = () => {
  return require('./seed')(User, Achievement)
}

module.exports = {
  sync,
  seed,
  User,
  Achievement
}
