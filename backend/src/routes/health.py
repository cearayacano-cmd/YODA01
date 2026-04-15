from fastapi import APIRouter
from ..controllers import health_controller

router = APIRouter()

@router.get("/health")
async def health_check():
    return await health_controller.get_health()
