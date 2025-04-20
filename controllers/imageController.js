const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Image = require('../models/Image');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ✅ DELETE controller
exports.deleteImage = async (req, res) => {
  const { id } = req.params;

  // Step 1: Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("❌ Invalid ID format:", id);
    return res.status(400).json({ error: "Invalid image ID format." });
  }

  try {
    // Step 2: Check if image exists
    const image = await Image.findById(id);
    if (!image) {
      console.warn("⚠️ Image not found in DB:", id);
      return res.status(404).json({ error: "Image not found." });
    }

    // Step 3: Delete from Cloudinary
    const cloudResult = await cloudinary.uploader.destroy(image.public_id);
    console.log("☁️ Cloudinary delete result:", cloudResult);

    // Step 4: Delete from MongoDB
    await Image.findByIdAndDelete(id);
    console.log("🗑️ Image deleted from DB:", id);

    return res.status(200).json({ success: true, message: "Image deleted successfully." });
  } catch (err) {
    console.error("🔥 Deletion failed:", err.message);
    return res.status(500).json({ error: "Delete failed", details: err.message });
  }
};
