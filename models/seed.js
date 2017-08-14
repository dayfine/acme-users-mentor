module.exports = (User, Achievement) => {
  let users
  return Promise.all([
    User.create({name: 'Gon Freecss' }),
    User.create({name: 'Killua Zoldyck' }),
    User.create({name: 'Kurapika' }),
    User.create({name: 'Leorio Paradinight' }),
    User.create({name: 'Hisoka Morow' }),
    User.create({name: 'Chrollo Lucilfer'})
  ])
  .then(_users => {
    users = _users
    return Promise.all([
      Achievement.create({ description: 'Most Important Being in the Galaxy', userId: 1 }),
      Achievement.create({ description: 'A-Maze-ing!', userId: 2 }),
      Achievement.create({ description: 'TESTETESTETESTSTS', userId: 3 })
    ])
  })
  .then(achievements => { users, achievements })
}
