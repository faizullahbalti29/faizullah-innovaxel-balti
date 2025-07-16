const url = require('../Modal')
const url = require('../Modal')
const shortid = require('shortid')
async function handleAddUrl(req,res) {
    console.log(req.body)
    const {originalUrl} = req.body
    const shortCode = shortid.generate()
    const result = await url.create({
        originalUrl: originalUrl,
        shortCode: shortCode
    })
    if(!result) return res.status(400).json({message: "Unable To Create"})
        return res.status(201).json({message: "URL_Added",shorUrl: shortCode})
}
async function handleGetAll(req,res) {
    const urls =await url.find({})
    if(!urls) return res.status(400).json({message: "Bad Request"})
    return res.status(201).json(urls)
} 

async function retriveOriginalUrl(req,res){
    const {shortUrl} = req.params.shortCode
    const originalUrl = url.findOne({shortCode: shortUrl})
    if(!originalUrl) return res.status(404).json({message: "No Url Found"})
    return res.status(201).json(originalUrl)
}
module.exports = {handleAddUrl,handleGetAll,retriveOriginalUrl}
