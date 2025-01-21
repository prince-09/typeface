import os
import uuid
from app.config import settings
from app.models import files_collection
from fastapi import HTTPException


ALLOWED_MIME_TYPES = [
    "image/png",
    "image/jpeg",
    "text/plain",
    "application/pdf",
    "application/json",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"  # docx
]

def save_file(file):
    try:
        # Validate file type (add restrictions as needed)
        if file.content_type not in ALLOWED_MIME_TYPES:
            raise HTTPException(
                status_code=400,
                detail=f"File type {file.content_type} is not allowed. Allowed types: {', '.join(ALLOWED_MIME_TYPES)}",
            )

        # Generate unique filename and save locally
        file_id = str(uuid.uuid4())
        file_path = os.path.join(settings.UPLOAD_DIR, file_id + "_" + file.filename)
        with open(file_path, "wb") as f:
            f.write(file.file.read())

        # Save metadata to MongoDB
        metadata = {
            "file_id": file_id,
            "filename": file.filename,
            "file_type": file.content_type,
            "file_path": file_path,
        }
        files_collection.insert_one(metadata)
        return file_id
    except Exception as e:
        print(f"Error saving file: {e}")
        return None

def get_all_files():
    return list(files_collection.find({}, {"_id": 0}))

def get_file_path(file_id):
    file = files_collection.find_one({"file_id": file_id})
    return file["file_path"] if file else None
