from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    MONGO_URI: str = "mongodb://localhost:27017"
    DB_NAME: str = "dropbox_db"
    UPLOAD_DIR: str = "uploads/"  # Local file storage directory

    class Config:
        env_file = ".env"

settings = Settings()
