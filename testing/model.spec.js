const
  expect = require('chai').expect,
  models = require('../models'),
  User = models.User,
  Award = models.Award

describe('User model', () => {
  beforeEach(() => {
    models.sync()
    .then(() => {
      models.seed()
    })
  })

  it('exists', () => {
    expect(User).to.be.ok
  })
})

describe('Award model', () => {
  beforeEach(() => {
    models.sync()
    .then(() => {
      models.seed()
    })
  })

  it('exists', () => {
    expect(Award).to.be.ok
  })
})
