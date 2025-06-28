import React, { useState } from "react";
import "../STYLE/addproject.css";
import axios from 'axios';
const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [contactdata, setContactdata] = useState([]);
  

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
    
     const responsecontact = await fetch('https://sarbazcvbackend.vercel.app/bin/getproject', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    const data=await responsecontact.json()
    

   if (data.messege.length>0) {
    
       setContactdata(data.messege)
   }


    } catch (error) {
    console.error('Upload error:', error);
    
    }
  };

  return <>
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
     <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '1rem' }}>
      {contactdata.length>0 ?(contactdata.map((data)=>{
return <>
       <div className="message-card">
      <h2 className="message-name">{data.name}</h2>
      <p className="message-email">📧 {data.email}</p>
      <div className="message-text">
        <p>{data.messsage}</p>
      </div>
    </div>
      </>
      })):(<>
      <div className="message-card">
      <h2 className="message-name">No Messege Are There</h2>
      </div>
      </>)}
      
     </div>
          </>
  
};

export default AddProject;
