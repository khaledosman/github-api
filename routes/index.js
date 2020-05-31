const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    hello: 'world!'
  })
})

router.use('/repositories', require('./repositories/repositories-router'))

module.exports = router
