import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();
import {
  User,Item,ContactModel} from "../model/AllModel.js";

const JWT_SECRET = process.env.JWT_SECRET || "SarbaxIdGreatDevloper2499";
router.get("/data", (req, res) => {
  res.send("Getting Response hehe");
});

router.post("/getUsername",async(req,res)=>{
    const token=req.body.token
   try {
          const payload = jwt.verify(token, JWT_SECRET);
      
          const existingUser = await User.findOne({ email:payload.email });
          const Info={
            _id:existingUser._id,
            name:existingUser.name,
            email:existingUser.email,
          }
         return res.status(200).send({ message: 'User found', payload:Info});
    } catch{
        console.log("Token expired");
        
    }
})

// Register Route For AdminRegister

router.post("/registeradmin", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All field are required" });
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Admin already registered" });
    }
    //lets Genrate Hash Bro
    //First Salt
    const salt = await bcrypt.genSalt(10);
    const Hashedpassword = await bcrypt.hash(password, salt);

    const regisuser = new User({
      name,
      email,
      password: Hashedpassword,
    });
    await regisuser.save();
    res.status(201).json({ message: "Admin Registered Successfully" });
  } catch (err) {
    console.error("Error in /register:", err);
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/postcontact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ message: "All field are required" });
  try {
    const newmessage = new ContactModel({
      name,
      email,
      messsage:message,
    });
    await newmessage.save();
    res.status(201).json({ message: "Message Send Successfully" });
  } catch (err) {
    console.error("Error in /Sending Message:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// get teacher



//login route

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email and password required" });
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Credincial Is Incorrect" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Password Is Incorrect" });
    }

    //if match then
    // Generate JWT token

    const token = jwt.sign(
      { email: user.email, Usernname: user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

      
      return res.json({
        token,
        messege: `Login success as admin and mail is ${user.email}`,
      });

  } catch (err) {
    console.error("Error in /login:", err);
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/getproject", async (req, res) => {
  try {

    const products = await Item.find(); 
    if (!products) {
        return res.status(400).json({ message: 'Data Not Fetched' });
        
    }
    return res.status(200).json({ message: 'Data fetched successfully', messege:products });
  
    
  } catch (err) {
    console.error("Error in fetch:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});
router.post("/contact", async (req, res) => {
  const{name,email,messege}=req.body
  console.log(name,email,messege);
  
  try {
    if(!name ||!email || !messege){
      return res.status(500).json({message:"All Field Are Requiered"})
    }
     const newmessage = new ContactModel({
      name,
      email,
      messsage:messege,
    });
    await newmessage.save();
    return res.status(201).json({message:"Thanks For Connecting 🤝!!"})
  } catch (err) {
    console.error("Error in fetch:", err);
    return res.status(500).json({ message: 'Something Went Wrong', error: err.message });
  }
});


router.get("/contactdetail", async (req, res) => {
  try {

    const contactdetail = await ContactModel.find(); 
    if (!contactdetail) {
        return res.status(400).json({ message: 'There Are No Messege' });
        
    }
    return res.status(200).json({ message: 'Data fetched successfully', messege:contactdetail });
  
    
  } catch (err) {
    console.error("Error in fetch:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post("/getverified",async(req,res)=>{
    const {token}=req.body

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }
   try {
          const payload = jwt.verify(token, JWT_SECRET);
          const user = await User.find({ email:payload.email });
          if (!user) {
            return res.status(400).json({ message: 'Token invalid'});
          }
          return res.status(200).json({ message: 'Token valid', payload:user});
    } catch{
        console.log("Token expired");
        
    }
})

export default router;
