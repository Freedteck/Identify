import React, { useState } from "react";
import QRCode from "qrcode.react";
import "../styles/file.css";

const FilesList = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
  };

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
            <tr key={index} onClick={() => handleFileClick(file)}>
              <td>{file.name}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedFile && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Scan QR Code to View Document</h2>
            <QRCode
              value={`https://identify-red.vercel.app/document/${selectedFile.name}`}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FilesList;
