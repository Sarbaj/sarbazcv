// NOTE: Admin panel disabled for static site deployment
import React from "react";
import "../STYLE/addproject.css";

const AddProject = () => {
  return (
    <div className="admin-disabled-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#000' }}>
        Admin Panel Disabled
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px' }}>
        The admin panel is disabled for this static portfolio deployment. 
        All content is managed through static data for optimal performance.
      </p>
    </div>
  );
};

export default AddProject;
