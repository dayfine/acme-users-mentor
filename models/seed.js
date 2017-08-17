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
      Achievement.create({ description: 'Contract and Limitation', userId: 1 }),
      Achievement.create({ description: 'Heavens Arena Lv 200 Cleared', userId: 1 }),
      Achievement.create({ description: 'Spent $10 billion in candy!', userId: 2 }),
      Achievement.create({ description: 'Passed Hunter Exam in One Round', userId: 2 }),
      Achievement.create({ description: 'Visited Dark Continent', userId: 3 }),
      Achievement.create({ description: 'Mastered All Nen Systems', userId: 3 })
    ])
  })
  .then(achievements => { users, achievements })
}
