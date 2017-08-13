module.exports = new require('sequelize')(process.env.DATABASE_URL, {
  logging: false
})
