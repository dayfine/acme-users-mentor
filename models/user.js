const
  conn = require('./conn'),
  Achievement = require('./achievement.js'),
  Faker = require('faker')

const User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

User.findUsersViewModel = function () {
  return User.findAll({
    order: [['id']],
    include: [{model: Achievement}, 'Mentor', 'Mentee']})
}

User.destroyById = function (userId) {
  return User.destroy({where: {id: userId}})
}

User.updateUserFromReq = function (userId, reqBody) {
  console.log(reqBody)
  let MenteeId = reqBody.mentee
  return User.update({MenteeId: MenteeId}, {where: {id: userId}})
    .then(() => User.update({MentorId: userId}, {where: {id: MenteeId}}))
}

User.generateAchievement = function (userId) {
  return Achievement.create({ description: Faker.company.bs(), userId })
}

User.removeAchievement = function (userId, achId) {
  return Achievement.destroy({where: {id: achId}})
}

module.exports = User
