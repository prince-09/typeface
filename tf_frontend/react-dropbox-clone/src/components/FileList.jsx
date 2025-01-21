import React from "react";

const FileList = ({ files }) => {
  console.log("Files-", files)

  const handleFileView = (fileId) => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/view/${fileId}`, '_blank');
  }

  const handleFileDownload = (fileId) => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/download/${fileId}`, '_blank');
  }
  const listContainerStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "20px",
    marginTop: "20px",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  };

  const linkStyle = {
    color: "#4A90E2",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={listContainerStyle}>
      <h2 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}>
        Files
      </h2>
      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
        {files.map((file, index) => (
          <li key={index} style={itemStyle}>
            <span>{file.filename}</span>
            <div>
              <span
                onClick={() => handleFileView(file.file_id)}
                style={{ ...linkStyle, marginRight: "15px" }}
              >
                View
              </span>
              <span
                onClick={() => handleFileDownload(file.file_id)}
                style={linkStyle}
              >
                Download
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
