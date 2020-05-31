require('dotenv').config()
// external libraries
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')

// app dependencies
const app = express()

// setup middlewars
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('common'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use(require('./routes'))

const PORT_NUMBER = process.env.PORT || 8000
// start the server
app.listen(PORT_NUMBER, () => {
  console.log('listening to connections on port: ' + PORT_NUMBER)
})