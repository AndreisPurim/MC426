from fastapi import APIRouter, Response
import ormar

from models.formulario import Formulario
from models.requests.formulario_update import FormularioUpdate
from controllers.utils.delete_controller import delete_controller
from controllers.utils.entidade_nao_encontrada import entidade_nao_encontrada
from controllers.utils.get_all_controller import get_all_controller
from controllers.utils.get_controller import get_controller
from controllers.utils.patch_controller import patch_controller
from controllers.utils.post_controller import post_controller

router = APIRouter()

banco_de_dados = []

@router.post("/")
@post_controller
async def add_item(entidade: Formulario):
    pass

@router.get("/")
@get_all_controller(Formulario)
async def list_item():
    pass

@router.get("/{id}")
@get_controller(Formulario)
async def get_formulario(id: int):
    pass


@router.patch("/{id}")
@patch_controller(Formulario)
async def patch_formulario(propriedades_atualizacao: FormularioUpdate, id: int):
    pass
    
@router.delete("/{id}")
@delete_controller(Formulario)
async def delete_formulario(id: int):
    pass