import React from 'react';
import '../styles/file.css';

const FilesList = ({ files }) => {
  return (
    <section id="files-section">
      <h2>{files.length} Uploaded files</h2>
      <table id="files-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Date Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FilesList;


