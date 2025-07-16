const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoConnect = require('./connection')
const middleware = require('./Middleware')
const Router = require('./Router')
dotenv.config()

app.use(express.json())

app.use(middleware())

app.use('/url',Router)

mongoConnect(process.env.DB_URL)

app.listen(process.env.PORT,(err,data)=>{
    console.log("App is Running")
})