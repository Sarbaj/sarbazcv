import React, { useState, useEffect } from 'react';

const TestAPI = () => {
  const [achievements, setAchievements] = useState(null);
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testAPIs = async () => {
      try {
        // Test achievements
        const achRes = await fetch('https://sarbazcvbackend.vercel.app/bin/achievements');
        const achData = await achRes.json();
        setAchievements(achData);
        console.log('Achievements API Response:', achData);

        // Test skills
        const skillRes = await fetch('https://sarbazcvbackend.vercel.app/bin/skillcategories');
        const skillData = await skillRes.json();
        setSkills(skillData);
        console.log('Skills API Response:', skillData);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('API Test Error:', err);
      }
    };

    testAPIs();
  }, []);

  if (loading) return <div style={{padding: '40px', textAlign: 'center'}}>Testing APIs...</div>;
  if (error) return <div style={{padding: '40px', color: 'red'}}>Error: {error}</div>;

  return (
    <div style={{padding: '40px', fontFamily: 'monospace'}}>
      <h1>API Test Results</h1>
      
      <div style={{marginBottom: '40px'}}>
        <h2>Achievements API</h2>
        <p><strong>Status:</strong> {achievements ? 'Success' : 'Failed'}</p>
        <p><strong>Count:</strong> {achievements?.data?.length || 0}</p>
        <pre style={{background: '#f5f5f5', padding: '20px', overflow: 'auto'}}>
          {JSON.stringify(achievements, null, 2)}
        </pre>
      </div>

      <div>
        <h2>Skills API</h2>
        <p><strong>Status:</strong> {skills ? 'Success' : 'Failed'}</p>
        <p><strong>Count:</strong> {skills?.data?.length || 0}</p>
        <pre style={{background: '#f5f5f5', padding: '20px', overflow: 'auto'}}>
          {JSON.stringify(skills, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TestAPI;
