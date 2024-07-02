const db = require('../orm/index.js')


const getAllTalents = (req, res) => {
   db.Talents.findAll().then((results) => {
        res.json(results[0])
    }).catch((err) => { res.status(500).send(err) })
}


module.exports = {
  getAllTalents 
}