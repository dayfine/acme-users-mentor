const
  express = require('express'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  models = require('./models')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('method-override')('_method'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
  models.sync()
  .then(() => models.seed())
  .catch(console.error)
})
