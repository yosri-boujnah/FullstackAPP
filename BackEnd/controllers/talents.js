const { Talent } = require('../orm')


module.exports = {
  getAllTalents: async (req, res) => {
    try {
      const talents = await Talent.findAll({ order: [["createdAt", "DESC"]] });
      res.status(200).json(talents);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");
    }
  },


  addTalent: async (req, res) => {
    try {
      const talent = await Talent.create(req.body);
      res.status(201).json(talent);
    } catch (error) {
      res.status(409).send(error);
    }
  },

  getOneTalent: async (req, res) => {
    try {
      const talent = await Talent.findByPk(req.params.id);
      res.status(200).json(talent);
    } catch (error) {
      res.status(500).send("Failed to load resource");
    }
  },


  deleteTalent: async (req, res) => {
    const { id } = req.params;

    try {
      // Find the talent by its primary key (id) and delete it
      const deletedTalent = await Talent.findByPk(id);

      if (!deletedTalent) {
        return res.status(404).send("Talent not found");
      }

      await deletedTalent.destroy();

      res.status(200).json({ message: "Talent deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to delete talent");
    }
  },

}