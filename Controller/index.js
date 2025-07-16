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
        return res.status(201).json({message: "URL_Added"})
}
async function handleGetAll(req,res) {
    const urls =await url.find({})
    if(!urls) return res.status(400).json({message: "Bad Request"})
    return res.status(201).json(urls)
} 
module.exports = {handleAddUrl,handleGetAll}