from fastapi import FastAPI
from app.routes.file_routes import router as file_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Include routes
app.include_router(file_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use ["http://localhost:5173"] for specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Typeface API"}
