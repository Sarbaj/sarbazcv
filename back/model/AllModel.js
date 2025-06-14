import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const JWT_SECRET =process.env.JWT_SECRET || 'SarbaxIdGreatDevloper2499'
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30,
            minLength: 2,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
);

const itemSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  description:String,
  speciality:String,
  link:String
 });

const ContactShema = new mongoose.Schema({
  name: String,
  email: String,
  messsage:String,
  
 },
 {timestamps:true}
);

const Item = mongoose.model('Project', itemSchema);
const User = mongoose.model('User', userSchema);
const ContactModel = mongoose.model('Contact', ContactShema);

export  {User,Item,ContactModel};   