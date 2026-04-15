from ..services import health_service

async def get_health():
    return await health_service.get_health_status()
