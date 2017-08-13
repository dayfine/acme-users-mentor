const
  conn = require('./conn'),
  User = conn.define('user',{
    name: conn.Sequelize.STRING
    allowNull: false
    unique: true
  })

module.exports = User
