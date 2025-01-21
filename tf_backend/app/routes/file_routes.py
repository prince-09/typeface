from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from app.services.file_service import save_file, get_all_files, get_file_path
import os

UPLOAD_FOLDER = "uploads"

# Ensure the uploads folder exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    result = save_file(file)
    if not result:
        raise HTTPException(status_code=400, detail="Invalid file type")
    return {"message": "File uploaded successfully", "file_id": result}

@router.get("/files")
async def list_files():
    return get_all_files()

@router.get("/view/{file_id}")
def download_file(file_id: str):
    file_path = get_file_path(file_id)
    if not file_path:
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(file_path)


@router.get("/download/{file_id}")
def download_file(file_id: str):
    file_path = get_file_path(file_id)
    if not file_path:
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(file_path, media_type='application/octet-stream', filename="document")