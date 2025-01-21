from pymongo import MongoClient
from app.config import settings

# MongoDB connection
client = MongoClient(settings.MONGO_URI)
db = client[settings.DB_NAME]

# Collection for file metadata
files_collection = db["files"]
