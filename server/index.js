const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 3001
let indexPath

if (process.env.NODE_ENV !== 'production') {
  app.use('/assets', express.static(path.join(__dirname, '../public/assets')))
  indexPath = path.join(__dirname, '..', 'public', 'index.html')
} else {
  app.use(express.static(path.join(__dirname, '..', 'build')))
  app.use('/assets', express.static(path.join(__dirname, '../build/assets')))
  indexPath = path.join(__dirname, '..', 'build', 'index.html')
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('*', (req, res, next) => res.sendFile(indexPath))

app.use((req, res, next) => {
  const error = new Error('page not found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  if (req.headers['content-type'] &&
    req.headers['content-type'].includes('application/json')
  ) {
    return res.status(err.status).send({message: err.message})
  }
  return res.status(err.status || 500).send(err)
})

app.listen(port, () => console.log(`listening on port ${port}`))
