const express = require('express')
const router = express.Router()


const { getAllTalents,addTalent,getOneTalent} = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)
router.post('/add',addTalent)
router.get('/getAll/:id',getOneTalent)




module.exports = router