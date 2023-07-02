from typing import Callable
from fastapi import APIRouter, FastAPI, Request, Response
from fastapi.routing import APIRoute
from controllers import formulario_controller as formulario
from controllers import usuario_controller as usuario

# Handle CORS
class CORSHandler(APIRoute):
    def get_route_handler(self) -> Callable:
        original_route_handler = super().get_route_handler()

        async def preflight_handler(request: Request) -> Response:
            if request.method == 'OPTIONS':
                response = Response()
                response.headers['Access-Control-Allow-Origin'] = '*'
                response.headers['Access-Control-Allow-Methods'] = '*'
                response.headers['Access-Control-Allow-Headers'] = '*'
            else:
                response = await original_route_handler(request)

        return preflight_handler


router = APIRouter(route_class=CORSHandler)

router.include_router(formulario.router, prefix='/formulario', tags=['Formulario'])

router.include_router(usuario.router, prefix='/usuarios', tags=['Usuario'])