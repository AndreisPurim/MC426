from fastapi import APIRouter

from controllers import formulario_controller as formulario

router = APIRouter()

router.include_router(formulario.router, prefix='/formulario')