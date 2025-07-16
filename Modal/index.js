const mongoose = require('mongoose')
const urlSchema = mongoose.Schema({
   originalUrl: {
        type: String,
        required: true
   },
   shortCode: {
    type: String,
    required: true,
    unique: true
   }
},{timestamps: true})
const url = mongoose.model("url",urlSchema)
module.exports = url