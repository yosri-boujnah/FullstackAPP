const express = require('express')
const router = express.Router()


const { getAllTalents,addTalent,getOneTalent,deleteTalent,
    updateTalent,findByTitle,findByCategory} = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)
router.post('/add',addTalent)
router.get('/getAll/:id',getOneTalent)
router.delete('/:id',deleteTalent)
router.put('/:id',updateTalent)
router.get('/title/:title',findByTitle)
router.get('/category/:category',findByCategory)




module.exports = router