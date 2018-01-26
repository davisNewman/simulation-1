const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express()
const controller = require('../controllers/controllers')

app.use(bodyParser.json())

require('dotenv').config()

const port = 3001;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});