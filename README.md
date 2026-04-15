# Universo Customer Care - LATAM

Este proyecto es una migración técnica de una aplicación HTML/React a una arquitectura Full-Stack con Next.js y FastAPI.

## Estructura del Proyecto

- `frontend/`: Aplicación Next.js (App Router).
- `backend/`: API FastAPI (Python).

## Requisitos

- Node.js 18+
- Python 3.9+

## Ejecución Local

### Backend

1. Navega a la carpeta `backend`.
2. Crea un entorno virtual: `python -m venv venv`.
3. Activa el entorno:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Instala las dependencias: `pip install -r requirements.txt`.
5. Ejecuta el servidor: `python src/main.py`.
   - El backend correrá en `http://localhost:8000`.

### Frontend

1. Navega a la carpeta `frontend`.
2. Instala las dependencias: `npm install`.
3. Crea un archivo `.env.local` basado en `.env.example`.
4. Ejecuta el servidor de desarrollo: `npm run dev`.
   - El frontend correrá en `http://localhost:3000`.

## Notas de Migración

- Se han mantenido todos los estilos inline originales.
- La lógica de estado y navegación se ha preservado íntegramente.
- Los iconos de Lucide se importan directamente desde la librería `lucide-react`.
