import React, { useState } from "react";
import "../STYLE/addproject.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const AddProject = () => {
  const [activeTab, setActiveTab] = useState("projects");
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
  const [expandedMessages, setExpandedMessages] = useState({});
  
  // Achievements state
  const [achievements, setAchievements] = useState([]);
  const [showAchievementForm, setShowAchievementForm] = useState(false);
  const [isEditingAchievement, setIsEditingAchievement] = useState(false);
  const [editingAchievementId, setEditingAchievementId] = useState(null);
  const [achievementTitle, setAchievementTitle] = useState("");
  const [achievementDescription, setAchievementDescription] = useState("");
  const [achievementIcon, setAchievementIcon] = useState("🏆");
  
  // Skills state
  const [skillCategories, setSkillCategories] = useState([]);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [isEditingSkill, setIsEditingSkill] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [skillTitle, setSkillTitle] = useState("");
  const [skillIcon, setSkillIcon] = useState("");
  const [skillsList, setSkillsList] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  // Loading states
  const [loadingAchievements, setLoadingAchievements] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);
  
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

  const fetchAchievements = async () => {
    try {
      setLoadingAchievements(true);
      const response = await fetch('https://sarbazcvbackend.vercel.app/bin/achievements', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log('Achievements response:', data);
      if (data && data.data) {
        setAchievements(data.data);
        console.log('Achievements set:', data.data.length);
      }
    } catch (error) {
      console.error('Fetch achievements error:', error);
    } finally {
      setLoadingAchievements(false);
    }
  }

  const fetchSkillCategories = async () => {
    try {
      setLoadingSkills(true);
      const response = await fetch('https://sarbazcvbackend.vercel.app/bin/skillcategories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log('Skills response:', data);
      if (data && data.data) {
        setSkillCategories(data.data);
        console.log('Skills set:', data.data.length);
      }
    } catch (error) {
      console.error('Fetch skill categories error:', error);
    } finally {
      setLoadingSkills(false);
    }
  }

useEffect(() => {
  FuncContac()
  fetchProjects()
  fetchAchievements()
  fetchSkillCategories()
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

  const toggleMessageExpand = (messageId) => {
    setExpandedMessages(prev => ({
      ...prev,
      [messageId]: !prev[messageId]
    }));
  };

  // Achievement handlers
  const handleAchievementSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditingAchievement 
        ? `https://sarbazcvbackend.vercel.app/bin/achievements/${editingAchievementId}`
        : 'https://sarbazcvbackend.vercel.app/bin/achievements';
      
      const method = isEditingAchievement ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: achievementTitle,
          description: achievementDescription,
          icon: achievementIcon
        })
      });
      
      if (response.ok) {
        setAchievementTitle("");
        setAchievementDescription("");
        setAchievementIcon("🏆");
        setShowAchievementForm(false);
        setIsEditingAchievement(false);
        setEditingAchievementId(null);
        fetchAchievements();
      }
    } catch (error) {
      console.error('Achievement submit error:', error);
    }
  };

  const handleEditAchievement = (achievement) => {
    setAchievementTitle(achievement.title);
    setAchievementDescription(achievement.description);
    setAchievementIcon(achievement.icon);
    setIsEditingAchievement(true);
    setEditingAchievementId(achievement._id);
    setShowAchievementForm(true);
  };

  const handleDeleteAchievement = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        const response = await fetch(`https://sarbazcvbackend.vercel.app/bin/achievements/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchAchievements();
        }
      } catch (error) {
        console.error('Delete achievement error:', error);
      }
    }
  };

  const handleAddNewAchievement = () => {
    setAchievementTitle("");
    setAchievementDescription("");
    setAchievementIcon("🏆");
    setIsEditingAchievement(false);
    setEditingAchievementId(null);
    setShowAchievementForm(true);
  };

  const handleCancelAchievement = () => {
    setShowAchievementForm(false);
    setIsEditingAchievement(false);
    setEditingAchievementId(null);
    setAchievementTitle("");
    setAchievementDescription("");
    setAchievementIcon("🏆");
  };

  // Skill handlers
  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      const skillsArray = skillsList.split(',').map(s => s.trim()).filter(s => s);
      
      const url = isEditingSkill 
        ? `https://sarbazcvbackend.vercel.app/bin/skillcategories/${editingSkillId}`
        : 'https://sarbazcvbackend.vercel.app/bin/skillcategories';
      
      const method = isEditingSkill ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: skillTitle,
          icon: skillIcon,
          skills: skillsArray,
          isHighlighted: isHighlighted
        })
      });
      
      if (response.ok) {
        setSkillTitle("");
        setSkillIcon("");
        setSkillsList("");
        setIsHighlighted(false);
        setShowSkillForm(false);
        setIsEditingSkill(false);
        setEditingSkillId(null);
        fetchSkillCategories();
      }
    } catch (error) {
      console.error('Skill submit error:', error);
    }
  };

  const handleEditSkill = (skill) => {
    setSkillTitle(skill.title);
    setSkillIcon(skill.icon);
    setSkillsList(skill.skills.join(', '));
    setIsHighlighted(skill.isHighlighted);
    setIsEditingSkill(true);
    setEditingSkillId(skill._id);
    setShowSkillForm(true);
  };

  const handleDeleteSkill = async (id) => {
    if (window.confirm('Are you sure you want to delete this skill category?')) {
      try {
        const response = await fetch(`https://sarbazcvbackend.vercel.app/bin/skillcategories/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchSkillCategories();
        }
      } catch (error) {
        console.error('Delete skill error:', error);
      }
    }
  };

  const handleAddNewSkill = () => {
    setSkillTitle("");
    setSkillIcon("");
    setSkillsList("");
    setIsHighlighted(false);
    setIsEditingSkill(false);
    setEditingSkillId(null);
    setShowSkillForm(true);
  };

  const handleCancelSkill = () => {
    setShowSkillForm(false);
    setIsEditingSkill(false);
    setEditingSkillId(null);
    setSkillTitle("");
    setSkillIcon("");
    setSkillsList("");
    setIsHighlighted(false);
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
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button 
          className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </button>
        <button 
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
        <button 
          className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      {activeTab === 'projects' && (
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
      )}

      {activeTab === 'messages' && (
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
                  contactdata.map((data, index) => {
                    const isExpanded = expandedMessages[data._id];
                    const messageText = data.messsage || '';
                    const shouldTruncate = messageText.length > 50;
                    const displayText = isExpanded || !shouldTruncate 
                      ? messageText 
                      : messageText.substring(0, 50) + '...';

                    return (
                      <tr key={data._id || index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td className="message-cell">
                          <div className="message-content">
                            {displayText}
                            {shouldTruncate && (
                              <button 
                                className="btn-see-more" 
                                onClick={() => toggleMessageExpand(data._id)}
                              >
                                {isExpanded ? 'See Less' : 'See More'}
                              </button>
                            )}
                          </div>
                        </td>
                        <td>
                          <button className="btn-delete" onClick={() => handleDeleteMessage(data._id)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="no-messages">No messages available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="achievements-container">
          <div className="achievements-header">
            <h2>Achievements Management</h2>
            <div style={{display: 'flex', gap: '10px'}}>
              <button className="btn-add-new" onClick={handleAddNewAchievement}>+ Add New Achievement</button>
              <button className="btn-add-new" onClick={fetchAchievements} style={{background: '#666'}}>🔄 Refresh</button>
            </div>
          </div>
          {!loadingAchievements && achievements.length > 0 && (
            <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>
              Total: {achievements.length} achievements
            </p>
          )}
          {!loadingAchievements && achievements.length === 0 && (
            <p style={{textAlign: 'center', color: 'red', marginBottom: '20px'}}>
              No achievements found. Check console for errors.
            </p>
          )}

          {showAchievementForm && (
            <div className="add-achievement">
              <h2>{isEditingAchievement ? 'Update Achievement' : 'Add New Achievement'}</h2>
              <form onSubmit={handleAchievementSubmit}>
                <label>Icon (Emoji):</label>
                <input
                  type="text"
                  value={achievementIcon}
                  onChange={(e) => setAchievementIcon(e.target.value)}
                  placeholder="🏆"
                  required
                />

                <label>Title:</label>
                <input
                  type="text"
                  value={achievementTitle}
                  onChange={(e) => setAchievementTitle(e.target.value)}
                  placeholder="e.g., 2019"
                  required
                />

                <label>Description:</label>
                <textarea
                  value={achievementDescription}
                  onChange={(e) => setAchievementDescription(e.target.value)}
                  placeholder="e.g., Started my journey in web development"
                  required
                ></textarea>

                <div className="form-buttons">
                  <button type="submit">{isEditingAchievement ? 'Update Achievement' : 'Add Achievement'}</button>
                  <button type="button" className="btn-cancel" onClick={handleCancelAchievement}>Cancel</button>
                </div>
              </form>
            </div>
          )}

          <div className="achievements-grid">
            {loadingAchievements ? (
              <p className="no-data">Loading achievements...</p>
            ) : achievements.length > 0 ? (
              achievements.map((achievement) => (
                <div key={achievement._id} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <div className="achievement-actions">
                    <button className="btn-update" onClick={() => handleEditAchievement(achievement)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeleteAchievement(achievement._id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No achievements available</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="skills-container">
          <div className="skills-header">
            <h2>Skills Management</h2>
            <div style={{display: 'flex', gap: '10px'}}>
              <button className="btn-add-new" onClick={handleAddNewSkill}>+ Add New Skill Category</button>
              <button className="btn-add-new" onClick={fetchSkillCategories} style={{background: '#666'}}>🔄 Refresh</button>
            </div>
          </div>
          {!loadingSkills && skillCategories.length > 0 && (
            <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>
              Total: {skillCategories.length} skill categories
            </p>
          )}
          {!loadingSkills && skillCategories.length === 0 && (
            <p style={{textAlign: 'center', color: 'red', marginBottom: '20px'}}>
              No skills found. Check console for errors.
            </p>
          )}

          {showSkillForm && (
            <div className="add-skill">
              <h2>{isEditingSkill ? 'Update Skill Category' : 'Add New Skill Category'}</h2>
              <form onSubmit={handleSkillSubmit}>
                <label>Icon (Emoji):</label>
                <input
                  type="text"
                  value={skillIcon}
                  onChange={(e) => setSkillIcon(e.target.value)}
                  placeholder="💻"
                  required
                />

                <label>Category Title:</label>
                <input
                  type="text"
                  value={skillTitle}
                  onChange={(e) => setSkillTitle(e.target.value)}
                  placeholder="e.g., Frontend Development"
                  required
                />

                <label>Skills (comma-separated):</label>
                <textarea
                  value={skillsList}
                  onChange={(e) => setSkillsList(e.target.value)}
                  placeholder="e.g., React, Vue, Angular, JavaScript"
                  required
                ></textarea>

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={isHighlighted}
                    onChange={(e) => setIsHighlighted(e.target.checked)}
                  />
                  Highlight this category
                </label>

                <div className="form-buttons">
                  <button type="submit">{isEditingSkill ? 'Update Skill Category' : 'Add Skill Category'}</button>
                  <button type="button" className="btn-cancel" onClick={handleCancelSkill}>Cancel</button>
                </div>
              </form>
            </div>
          )}

          <div className="skills-grid">
            {loadingSkills ? (
              <p className="no-data">Loading skills...</p>
            ) : skillCategories.length > 0 ? (
              skillCategories.map((category) => (
                <div key={category._id} className={`skill-card ${category.isHighlighted ? 'highlighted' : ''}`}>
                  <div className="skill-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="skill-actions">
                    <button className="btn-update" onClick={() => handleEditSkill(category)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeleteSkill(category._id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No skill categories available</p>
            )}
          </div>
        </div>
      )}
    </div>
  </>
  
};

export default AddProject;
