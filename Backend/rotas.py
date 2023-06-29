from fastapi import APIRouter

from controllers import formulario_controller as formulario
from controllers import usuario_controller as usuario

router = APIRouter()

router.include_router(formulario.router, prefix='/formulario', tags=['Formulario'])

router.include_router(usuario.router, prefix='/usuarios', tags=['Usuario'])