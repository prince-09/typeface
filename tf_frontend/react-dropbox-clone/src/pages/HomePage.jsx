import React, { useState, useEffect } from "react";
import FileList from "../components/FileList";
import FileUpload from "../components/FileUpload";
import axios from "axios";

const HomePage = () => {
  const [files, setFiles] = useState([]);

  // Fetch files on load
  useEffect(() => {
    fetchAllFiles()
  }, []);

  const fetchAllFiles = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/files`)
    .then(response => setFiles(response.data))
    .catch(error => console.error("Error fetching files:", error));
  }

  const containerStyle = {
    maxWidth: "900px",
    margin: "20px auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Files</h1>
      <FileUpload setFiles={setFiles} fetchAllFiles={fetchAllFiles} />
      <FileList files={files} />
    </div>
  );
};

export default HomePage;
