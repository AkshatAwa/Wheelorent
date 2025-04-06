const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For serving images

// ✅ Mongo Connection
mongoose.connect('mongodb://localhost:27017/vehicleDB')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// ✅ Schema FIRST
const Vehicle = mongoose.model('Vehicle', new mongoose.Schema({
  userId: String,
  name: String,
  phone: String,
  address: String,
  town: String,
  model: String,
  regNumber: String,
  company: String,
  carNumber: String,
  pickCity: String,
  pickDate: String,
  pickTime: String,
  dropCity: String,
  dropDate: String,
  dropTime: String,
  paymentMethod: String,
  agreement: Boolean,
  policy: Boolean,
  imageUrl: String,
}));

// ✅ THEN this route
app.get('/cars', async (req, res) => {
  try {
    const allCars = await Vehicle.find();
    res.status(200).json(allCars);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cars' });
  }
});

// Multer config
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Publish route
app.post('/publish', upload.single('image'), async (req, res) => {
  try {
    const formData = JSON.parse(req.body.data);  // contains car details + userId
    console.log("Received userId:", formData.userId); // 💥 inside the route
    const imagePath = req.file.path;

    const newVehicle = new Vehicle({
      ...formData,
      imageUrl: imagePath,
    });

    await newVehicle.save();
    res.status(200).json({ message: 'Vehicle published successfully' });
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(5000, () => console.log("🚗 Server running on http://localhost:5000"));
