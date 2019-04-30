const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then( db =>{
    app.set('db',db);
    app.listen(SERVER_PORT, () =>(
        `Server Listening On Port: ${SERVER_PORT}`
    ))
})
