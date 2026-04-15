from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import health

app = FastAPI(title="Universo Customer Care API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
