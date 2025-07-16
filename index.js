const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoConnect = require('./connection')

dotenv.config()
mongoConnect(process.env.DB_URL)

app.listen(process.env.PORT,(err,data)=>{
    console.log("App is Running")
})