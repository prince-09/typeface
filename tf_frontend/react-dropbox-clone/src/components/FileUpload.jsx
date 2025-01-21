import React from "react";
import axios from "axios";

const FileUpload = ({ setFiles, fetchAllFiles }) => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData);
      fetchAllFiles()
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const uploadContainerStyle = {
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    display: "inline-block",
    fontWeight: "bold",
    backgroundColor: "#f0f8ff",
    color: "#333",
  };

  return (
    <div style={uploadContainerStyle}>
      <input
        type="file"
        onChange={handleUpload}
        style={inputStyle}
      />
    </div>
  );
};

export default FileUpload;
