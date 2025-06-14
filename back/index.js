import express from 'express';
import dotenv from 'dotenv';
import router from './routes/Router.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import DbConnection from './DB/Db.js';
import cors from 'cors';
 import mongoose from 'mongoose';
 import { v2 as cloudinary } from 'cloudinary';
 import { CloudinaryStorage } from 'multer-storage-cloudinary';
 import multer from 'multer';
import { Item } from './model/AllModel.js';
const app=express()
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
app.use(cors( {
  origin: ['https://sarbazcv.vercel.app'], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204
}));

const PORT=5050;
dotenv.config();
 
 // Configure Cloudinary
 cloudinary.config({
  cloud_name:"dk3qgeliq",
  api_key: "551579834733423",
  api_secret:"1c7ImeTRj6agLjieXEypAd5U4eE"
 });
 const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
  folder: 'uploads', // Optional: folder name on Cloudinary
  allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'], // Allowed image formats
  },
 });
 const upload = multer({ storage: storage });
DbConnection()
app.get('/',(req,res)=>{
    res.send("Getting Response 🔥")
    
})
// Add at top of your Express app
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/bin',router)
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
  if (!req.file) {
  return res.status(400).json({ message: 'No image uploaded' });
  }
 
  const newItem = new Item({
  name: req.body.name,
  imageUrl: req.file.path,
  description:req.body.description,
  speciality:req.body.speciality,
   // URL of the uploaded image
  });
 
  await newItem.save();
 
  res.status(201).json({ message: 'Image uploaded and data saved', data: newItem });
  } catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Server error', error: error.message });
  }
 });


export default app;