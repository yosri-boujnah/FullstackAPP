const express = require('express')
const router = express.Router()
const { cloudinary } = require('../utils/cloudinary.js');
const upload = require('../middleware/multer.js')


const { getAllTalents, addTalent, getOneTalent, deleteTalent,
    updateTalent, findByTitle, findByCategory } = require('../controllers/talents.js');



router.get('/getAll', getAllTalents)
router.post('/add', addTalent)
router.get('/getAll/:id', getOneTalent)
router.delete('/:id', deleteTalent)
router.put('/:id', updateTalent)
router.get('/title/:title', findByTitle)
router.get('/category/:category', findByCategory)

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images'
        });

        // Send the Cloudinary URL in the response
        res.json({ imageUrl: result.secure_url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
});





module.exports = router