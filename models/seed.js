module.exports = (User, Achievement) => {
  let users
  return Promise.all([
    User.create({name: 'Gon Freecss' }),
    User.create({name: 'Killua Zoldyck' }),
    User.create({name: 'Kurapika' })
  ])
  .then(_users => {
    users = _users
    return Promise.all([
      Achievement.create({ description: 'Most Important Being in the Galaxy', userId: 1 }),
      Achievement.create({ description: 'A-Maze-ing!', userId: 2 }),
      Achievement.create({ description: 'Ate $50 at McDonalds for one meal', userId: 3 }),
      Achievement.create({ description: 'Mastered All Nen Systems', userId: 3 })
    ])
  })
  .then(achievements => { users, achievements })
}
