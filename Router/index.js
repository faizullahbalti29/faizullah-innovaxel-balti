const express = require('express')
const {handleAddUrl,handleGetAll, retriveOriginalUrl} = require('../Controller')
const router = express.Router()

router.route('/').post(handleAddUrl).get(handleGetAll)
router.route('/:shortCode').get(retriveOriginalUrl)
module.exports = router