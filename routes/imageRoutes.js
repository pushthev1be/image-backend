const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { uploadImage, getAllImages } = require('../controllers/imageController');

const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getAllImages);

module.exports = router;
