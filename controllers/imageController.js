const cloudinary = require('cloudinary').v2;
const Image = require('../models/Image');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    
    const image = new Image({
      url: result.secure_url,
      public_id: result.public_id,
      title: req.body.title,
      description: req.body.description
    });

    await image.save();
    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllImages = async (req, res) => {
  const images = await Image.find().sort('-createdAt');
  res.json(images);
};
