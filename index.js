const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);

const app = express();

// ✅ Allow only frontend from Vercel to access
app.use(cors({ origin: 'https://image-gallery-git-main-pushthev1bes-projects.vercel.app' }));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err.message, err.stack));

// Routes
const imageRoutes = require('./routes/imageRoutes');
app.use('/api/images', imageRoutes);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});
