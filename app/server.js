const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./configs/db')
const PORT = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./routes')(app, database)

  app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`)
  })
})
