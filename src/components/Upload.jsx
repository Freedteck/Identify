import React, { useState } from 'react';
import '../styles/upload.css'

const Upload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && isValid) {
      onFileUpload(file);
      setFile(null);
      setIsValid(false);
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setIsValid(true);
    } else {
      setFile(null);
      setIsValid(false);
      alert('Please upload a PDF file.');
    }
  };

  const documentTypes = ['Passport', 'National Id', "Driver's License", "School Certificate", "Tax Slip"]

  return (
    <section className='upload'>
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <label>
          select identity type
          <select defaultValue={""} required>
            <option value={''} disabled>Select means of identity</option>
            {documentTypes.map(doc =>
              <option value={doc}>{doc}</option>
            )} </select>

        </label>
        <label className='files'>
          {file ? file.name : 'Click to upload a file'}
          <input
            type="file"
            onChange={handleChange}
            required
            accept='.pdf'
          />
        </label>
        <button type="submit">Upload</button>
      </form>
    </section>
  );
};

export default Upload;

