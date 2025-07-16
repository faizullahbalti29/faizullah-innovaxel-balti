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
    const shortUrl = req.params.id
    console.log(shortUrl)
    const originalUrl =await url.findOne({shortCode: shortUrl})
    if(!originalUrl) return res.status(404).json({message: "No Url Found"})
    return res.status(201).json(originalUrl)
}
async function updateUrl(req,res) {
    const shortCode = req.params.id
    const result =await url.findOneAndUpdate({shortCode},req.body,{new: true})
    if(!result) return res.status(404).json({message: "No Url Found"})
        console.log(result)
     return res.status(201).json(result)
}
async function deleteUrl(req,res) {
    const shortCode = req.params.id
    const result =await url.findOneAndDelete({shortCode})
    if(!result) return res.status(404).json({message: "No Url Found"})
     return res.status(201).json({message: "Url Deleted"})
}
module.exports = {handleAddUrl,handleGetAll,retriveOriginalUrl,updateUrl,deleteUrl}
