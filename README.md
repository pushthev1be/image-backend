# 🖼️ Image Backend API

A Node.js backend service for image upload and management using Cloudinary integration. Built with Express and MongoDB for storing image metadata.

## 🚀 Features

- **Image Upload**: Upload images to Cloudinary with automatic optimization
- **Image Management**: Store and retrieve image metadata in MongoDB
- **RESTful API**: Clean API endpoints for frontend integration
- **CORS Support**: Configured for frontend deployment on Vercel
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Cloud Storage**: Cloudinary for image hosting
- **File Upload**: Multer for handling multipart/form-data

## 📋 API Endpoints

### Upload Image
```http
POST /api/images
Content-Type: multipart/form-data

Body:
- image: File (required)
- title: String (optional)
- description: String (optional)
```

### Get All Images
```http
GET /api/images
```

### Delete Image
```http
DELETE /api/images/:id
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/pushthev1be/image-backend.git
   cd image-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB and Cloudinary credentials

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`

## 📦 Dependencies

- `express` - Web framework
- `mongoose` - MongoDB object modeling
- `cloudinary` - Cloud image management
- `multer` - File upload handling
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

## 🔒 Security Features

- Input validation for image uploads
- File type restrictions
- Error handling for invalid requests
- CORS configuration for specific origins

## 🚀 Deployment

This backend is configured for deployment with:
- Environment-based configuration
- Production-ready error handling
- CORS setup for frontend integration

## 📝 License

MIT License - see LICENSE file for details
