const url = require('../Modal')
const shortid = require('shortid')
async function handleAddUrl(req,res) {
    const {originalUrl} = req.body
    const shortCode = shortid.generate()
    const result = await url.create({
        originalUrl: originalUrl,
        shortCode: shortCode
    })
    if(!result) return res.status(400).json({message: "Unable To Create"})
        return res.status(201).json({message: "URL_Added"})
}

module.exports = handleAddUrl