const express = require('express')
const router = express.Router()


const { getAllTalents,addTalent,getOneTalent,deleteTalent} = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)
router.post('/add',addTalent)
router.get('/getAll/:id',getOneTalent)
router.delete('/delete/:id',deleteTalent)




module.exports = router