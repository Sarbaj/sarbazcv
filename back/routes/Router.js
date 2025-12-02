import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();
import {
  User, Item, ContactModel, Achievement, SkillCategory} from "../model/AllModel.js";

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

router.delete("/deletecontact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await ContactModel.findByIdAndDelete(id);
    
    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }
    
    return res.status(200).json({ message: 'Message deleted successfully' });
  } catch (err) {
    console.error("Error in delete:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ============ ACHIEVEMENTS ROUTES ============

// Get all achievements
router.get("/achievements", async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: 1 });
    return res.status(200).json({ message: 'Achievements fetched successfully', data: achievements });
  } catch (err) {
    console.error("Error fetching achievements:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add new achievement
router.post("/achievements", async (req, res) => {
  try {
    const { title, description, icon } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }
    
    const newAchievement = new Achievement({
      title,
      description,
      icon: icon || '🏆'
    });
    
    await newAchievement.save();
    return res.status(201).json({ message: 'Achievement added successfully', data: newAchievement });
  } catch (err) {
    console.error("Error adding achievement:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update achievement
router.put("/achievements/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, icon } = req.body;
    
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      id,
      { title, description, icon },
      { new: true }
    );
    
    if (!updatedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    
    return res.status(200).json({ message: 'Achievement updated successfully', data: updatedAchievement });
  } catch (err) {
    console.error("Error updating achievement:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete achievement
router.delete("/achievements/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAchievement = await Achievement.findByIdAndDelete(id);
    
    if (!deletedAchievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    
    return res.status(200).json({ message: 'Achievement deleted successfully' });
  } catch (err) {
    console.error("Error deleting achievement:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ============ SKILL CATEGORIES ROUTES ============

// Get all skill categories
router.get("/skillcategories", async (req, res) => {
  try {
    const skillCategories = await SkillCategory.find().sort({ createdAt: -1 });
    return res.status(200).json({ message: 'Skill categories fetched successfully', data: skillCategories });
  } catch (err) {
    console.error("Error fetching skill categories:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add new skill category
router.post("/skillcategories", async (req, res) => {
  try {
    const { title, icon, skills, isHighlighted } = req.body;
    
    if (!title || !icon || !skills || skills.length === 0) {
      return res.status(400).json({ message: 'Title, icon, and at least one skill are required' });
    }
    
    const newSkillCategory = new SkillCategory({
      title,
      icon,
      skills,
      isHighlighted: isHighlighted || false
    });
    
    await newSkillCategory.save();
    return res.status(201).json({ message: 'Skill category added successfully', data: newSkillCategory });
  } catch (err) {
    console.error("Error adding skill category:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update skill category
router.put("/skillcategories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, icon, skills, isHighlighted } = req.body;
    
    const updatedSkillCategory = await SkillCategory.findByIdAndUpdate(
      id,
      { title, icon, skills, isHighlighted },
      { new: true }
    );
    
    if (!updatedSkillCategory) {
      return res.status(404).json({ message: 'Skill category not found' });
    }
    
    return res.status(200).json({ message: 'Skill category updated successfully', data: updatedSkillCategory });
  } catch (err) {
    console.error("Error updating skill category:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Delete skill category
router.delete("/skillcategories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkillCategory = await SkillCategory.findByIdAndDelete(id);
    
    if (!deletedSkillCategory) {
      return res.status(404).json({ message: 'Skill category not found' });
    }
    
    return res.status(200).json({ message: 'Skill category deleted successfully' });
  } catch (err) {
    console.error("Error deleting skill category:", err);
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
