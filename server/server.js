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


//--------Axios Calls--------//
app.get('/api/shelfie/bins', (req,res)=>{
    const db = req.app.get('db')
    db.get_bins([req.query.bins])
    .then(resp=>{
        console.log(resp)
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.get('/api/shelfie/getItem', (req,res)=>{
    const db = req.app.get('db')
    db.get_bin_item([req.query.id])
    .then(resp=>{
        res.status(200).send(resp[0])
    })
    .catch(console.log)
})


app.post('/api/shelfie/createItem', (req,res)=>{
    let { id, name, price} = req.body
    const db = req.app.get('db')
    db.add_items([id, name, price, id[0]])
    .then(resp=>{
        res.status(200).send(resp)
    })
    .catch(console.log)
})

app.put('/api/shelfie/editItem', (req,res)=>{
    const db = req.app.get('db')
    db.edit_items([req.body.binName, req.body.binPrice, req.query.id])
    .then(resp=>{
        db.get_bin_item([req.query.id])
        .then(response=>{
            res.status(200).send(response)
        })
    })
})

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
});