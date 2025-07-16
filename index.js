const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoConnect = require('./connection')
const handleAddUrl = require('./Controller')
const middleware = require('./Middleware')
dotenv.config()

app.use(express.json())

app.use(middleware())

mongoConnect(process.env.DB_URL)

app.listen(process.env.PORT,(err,data)=>{
    console.log("App is Running")
})