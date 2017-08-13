const
  conn = require('./conn'),
  Award = conn.define('award',{
    name: conn.Sequelize.STRING
    allowNull: false
  })

module.exports = Award
