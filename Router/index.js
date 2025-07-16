const express = require('express')
const {handleAddUrl,handleGetAll, retriveOriginalUrl, updateUrl} = require('../Controller')
const router = express.Router()

router.route('/').post(handleAddUrl).get(handleGetAll)
router.route('/:id').get(retriveOriginalUrl).put(updateUrl)
module.exports = router