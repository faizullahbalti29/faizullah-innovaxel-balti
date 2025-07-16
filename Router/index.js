const express = require('express')
const {handleAddUrl,handleGetAll} = require('../Controller')
const router = express.Router()

router.route('/').post(handleAddUrl).get(handleGetAll)

module.exports = router