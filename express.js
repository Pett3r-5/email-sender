const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname))


app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, 'public/index.html'))
})


app.listen(3010)
