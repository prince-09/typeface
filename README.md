
# File Management System

This project is a file management system that allows users to upload, view, and download files. It includes both a backend (built with FastAPI) and a frontend (built with React and styled using inline styles).

## Features

- Upload files to the server.
- View files in the browser.
- Download files by clicking on a download button.

---

## Backend Setup (FastAPI)

### Prerequisites

- Python 3.8 or higher
- `pip` (Python package manager)

### Installation

1. Navigate to the `tf_backend/` folder:
   ```bash
   cd tf_backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the `tf_backend/` directory and add the backend URL:
   ```
   MONGO_URI="your_url"
    DB_NAME=tf_db
    UPLOAD_DIR=uploads/
   ```

5. Run the backend server:
   ```bash
   uvicorn app.main:app --reload
   ```

6. The backend server will be running at:
   ```
   http://localhost:8000
   ```

7. Backend API Endpoints:
   - `POST /upload`: Upload files.
   - `GET /files`: List all files.
   - `GET /view/{file_id}`: View a file in the browser.
   - `GET /download/{file_id}`: Download a file.

---

## Frontend Setup (React)

### Prerequisites

- Node.js and npm (or yarn)

### Installation

1. Navigate to the `frontend/` folder:
   ```bash
   cd tf_frontend/react-dropbox-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `tf_frontend/` directory and add the backend URL:
   ```
   VITE_BACKEND_URL = "http://localhost:8000"
   ```

4. Run the frontend development server:
   ```bash
   npm run dev
   ```

5. The frontend app will be running at:
   ```
   http://localhost:5173
   ```

---

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. Upload files using the file upload input.
3. View or download files by clicking the respective buttons.

