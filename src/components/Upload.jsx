import React, { useState } from 'react';
import '../styles/upload.css'

const Upload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onFileUpload(file);
      setFile(null);
    }
  };

  return (
    <section className='upload'>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {file ? file.name : 'Click to upload a file'}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>
        <button type="submit">Upload</button>
      </form>
    </section>
  );
};

export default Upload;

