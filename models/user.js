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
    .then(users => {
      users.forEach((u, i, arr) => {
        u.candidates = arr.filter(c => {
          return (c.id !== u.id) && (c.Mentor === null)
        })
      })
      return users
    })
}

User.destroyById = function (userId) {
  return User.destroy({where: {id: userId}})
}

User.updateUserFromReq = function (userId, reqBody) {
  console.log(userId, reqBody)
  let MenteeId = reqBody.mentee, mentor
  return User.findOne({where: {id: userId}})
    .then(_mentor => {
      mentor = _mentor
      return User.findOne({where: {id: MenteeId}})
    })
    .then(mentee => Promise.all([
      mentee.setMentor(mentor),
      mentor.setMentee(mentee)
    ]))
}

User.generateAchievement = function (userId) {
  return Achievement.create({ description: Faker.company.bs(), userId })
}

User.removeAchievement = function (userId, achId) {
  return Achievement.destroy({where: {id: achId}})
    .then(() => User.findOne({where: {id: userId}, include: [{model: Achievement}]}))
    .then((mentor) => {
      if (mentor.achievements.length < 2) {
        return User.findOne({where: {id: mentor.MenteeId}})
          .then(mentee => mentee.setMentor(null))
          .then(() => mentor.setMentee(null))
      }
    })
}

module.exports = User
