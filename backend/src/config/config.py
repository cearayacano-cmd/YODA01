import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_NAME: str = "Universo Customer Care"
    API_V1_STR: str = "/api"
    
settings = Settings()
