import React, { useState } from "react";
import "../STYLE/addproject.css";
import axios from 'axios';
const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', projectName);
    formData.append('speciality', specialty);
    formData.append('description', description);
    formData.append('link', link);
    
    try {
    const response = await axios.post('https://sarbazcvbackend.vercel.app/upload', formData, {
    headers: {
    'Content-Type': 'multipart/form-data',
    },
    });
    
    } catch (error) {
    console.error('Upload error:', error);
    
    }
  };

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />

        <label>Project Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Project Specialty:</label>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
         <label>Project link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <label>Upload File:</label>
        <input type="file" onChange={handleFileChange} required />

        <button type="submit">Upload Project</button>
      </form>
    </div>
  );
};

export default AddProject;
