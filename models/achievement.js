const
  conn = require('./conn'),
  Achievement = conn.define('achievement', {
    description: {
      type: conn.Sequelize.STRING,
      allowNull: false
    }
  })

module.exports = Achievement
