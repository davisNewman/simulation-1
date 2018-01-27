const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express()
const controller = require('../controllers/controllers')
const cors = require('cors')
require('dotenv').config()

// massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db',dbInstance))

app.use(bodyParser.json())
app.use(cors())

app.get('/api/shelfie/', controller.getBins)


const port = 3001;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});