import React, { useState, useEffect } from 'react';
import Upload from '../components/Upload';
import FilesList from '../components/FileList';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    setFiles(savedFiles);
  }, []);

  const handleFileUpload = (file) => {
    const newFile = {
      name: file.name,
      date: new Date().toLocaleDateString(),
    };
    const updatedFiles = [...files, newFile];
    setFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
  };

  return (
    <main className='dashboard'>
      <h1>Management Dashboard</h1>
      <Upload onFileUpload={handleFileUpload} />
      <FilesList files={files} />
    </main>
  );
};

export default Dashboard;

