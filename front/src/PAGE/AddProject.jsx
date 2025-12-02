import React, { useState } from "react";
import "../STYLE/addproject.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [contactdata, setContactdata] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const FuncContac=async()=>{
      try {
           const responsecontact = await fetch('https://sarbazcvbackend.vercel.app/bin/contactdetail', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    const data=await responsecontact.json()
    

   if (data.messege.length>0) {
       setContactdata(data.messege)
       console.log(data.messege);
       
   }
      } catch (error) {
         console.error('Upload error:', error);
      }
  }

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://sarbazcvbackend.vercel.app/bin/getproject', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      if (data && data.messege) {
        setProjects(data.messege);
      }
    } catch (error) {
      console.error('Fetch projects error:', error);
    }
  }

useEffect(() => {
  FuncContac()
  fetchProjects()
}, [])


  const handleSubmit = async(event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', projectName);
    formData.append('speciality', specialty);
    formData.append('description', description);
    formData.append('link', link);
    
    try {
    const url = isEditing 
      ? `https://sarbazcvbackend.vercel.app/update/${editingProjectId}`
      : 'https://sarbazcvbackend.vercel.app/upload';
    
    const response = await axios.post(url, formData, {
    headers: {
    'Content-Type': 'multipart/form-data',
    },
    });
    
    // Reset form
    setProjectName("");
    setDescription("");
    setSpecialty("");
    setLink("");
    setFile(null);
    setShowAddForm(false);
    setIsEditing(false);
    setEditingProjectId(null);
    
    // Refresh projects list
    fetchProjects();

    } catch (error) {
    console.error('Upload error:', error);
    
    }
  };

  const handleEdit = (project) => {
    setProjectName(project.name);
    setDescription(project.description);
    setSpecialty(project.speciality);
    setLink(project.link);
    setIsEditing(true);
    setEditingProjectId(project._id);
    setShowAddForm(true);
  };

  const handleView = (project) => {
    alert(`Project: ${project.name}\nSpecialty: ${project.speciality}\nDescription: ${project.description}\nLink: ${project.link}`);
  };

  const handleAddNew = () => {
    setProjectName("");
    setDescription("");
    setSpecialty("");
    setLink("");
    setFile(null);
    setIsEditing(false);
    setEditingProjectId(null);
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setIsEditing(false);
    setEditingProjectId(null);
    setProjectName("");
    setDescription("");
    setSpecialty("");
    setLink("");
    setFile(null);
  };

  const handleDeleteMessage = async (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const response = await fetch(`https://sarbazcvbackend.vercel.app/bin/deletecontact/${messageId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        
        if (response.status === 200) {
          // Refresh contact messages list
          FuncContac();
        } else {
          alert('Failed to delete message');
        }
      } catch (error) {
        console.error('Delete error:', error);
        alert('Error deleting message');
      }
    }
  };
 useEffect(() => {
    const verifyToken = async () => {
      const token =localStorage.getItem("cvToken");
      if (!token) {
        navigate('/bin/auth/login');
      }
      try {
        
        const response = await fetch("https://sarbazcvbackend.vercel.app/bin/getverified", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();
      
     if (response.status !== 200) {
          navigate('/bin/auth/login');
        
        }
      } catch (error) {
        navigate('/bin/auth/login');
        console.log("eror");
        aleart("error")
      }
    };
    verifyToken();
  }, [],);

  return <>
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects Management</h2>
        <button className="btn-add-new" onClick={handleAddNew}>+ Add New Project</button>
      </div>

      {showAddForm && (
        <div className="add-project">
          <h2>{isEditing ? 'Update Project' : 'Add New Project'}</h2>
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
            <input type="file" onChange={handleFileChange} required={!isEditing} />

            <div className="form-buttons">
              <button type="submit">{isEditing ? 'Update Project' : 'Upload Project'}</button>
              <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="projects-table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Specialty</th>
              <th>Description</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <tr key={project._id || index}>
                  <td>{project.name}</td>
                  <td>{project.speciality}</td>
                  <td className="description-cell">{project.description}</td>
                  <td>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Link
                    </a>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-view" onClick={() => handleView(project)}>View</button>
                      <button className="btn-update" onClick={() => handleEdit(project)}>Update</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-projects">No projects available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    <div className="messages-section">
      <div className="messages-header">
        <h2>Contact Messages</h2>
      </div>

      <div className="messages-table-container">
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactdata.length > 0 ? (
              contactdata.map((data, index) => (
                <tr key={data._id || index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td className="message-cell" title={data.messsage}>{data.messsage}</td>
                  <td>
                    <button className="btn-delete" onClick={() => handleDeleteMessage(data._id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-messages">No messages available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </>
  
};

export default AddProject;
