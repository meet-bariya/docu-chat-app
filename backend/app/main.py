from datetime import datetime, timezone

from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status":"ok"}

@app.get("/api/hello")
def hello():
    return {"message": "Hello from FastAPI"}

@app.get("/api/timestamp")
def get_timestamp():
    return {"timestamp": datetime.now(timezone.utc)}