const {Talent} = require('../orm')


module.exports = {
  getAllTalents: async (req, res) => {
    try {
      const talents = await Talent.findAll();
      res.status(200).json(talents);
    } catch (error) {
        console.log(error);
      res.status(500).send("Failed to load resource");
    }
  },
}