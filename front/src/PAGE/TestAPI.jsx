// NOTE: API testing disabled for static site deployment
import React from 'react';

const TestAPI = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#000' }}>
        API Testing Disabled
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px' }}>
        API testing is disabled for this static portfolio deployment.
      </p>
    </div>
  );
};

export default TestAPI;
