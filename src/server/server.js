const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
})

app.use(bodyParser.json())
app.use(cors())

app.get('/api/shelfie/bins', (req,res)=>{
    const db = req.app.get('db')
    db.get_bins([req.query.bins])
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
});