const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const {
  uploadImage,
  getAllImages,
  deleteImage
} = require('../controllers/imageController');

const router = express.Router();

// ✅ Rename this to match resource logic
router.post('/', upload.single('image'), uploadImage);

// Already correct:
router.get('/', getAllImages);
router.delete('/:id', deleteImage);

module.exports = router;
