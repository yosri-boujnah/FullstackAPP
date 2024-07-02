const express = require('express')
const router = express.Router()


const { getAllTalents,addTalent} = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)
router.post('/add',addTalent)




module.exports = router