const express = require('express')
const router = express.Router()


const { getAllTalents} = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)




module.exports = router