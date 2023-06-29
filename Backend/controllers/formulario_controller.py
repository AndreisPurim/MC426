from fastapi import APIRouter, Response
import ormar

from models.formulario import Formulario
from models.requests.formulario_update import FormularioUpdate

router = APIRouter()

banco_de_dados = []

@router.post("/")
async def add_item(item: Formulario):
    #banco_de_dados.append(item)
    await item.save()
    return item

@router.get("/")
async def list_item():
    return await Formulario.objects.all()

@router.get("/{formulario_id}")
async def get_formulario(formulario_id: int, response: Response):
    try:
        formulario = await Formulario.objects.get(id=formulario_id)
        return formulario
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {"mensagem": "Entidade não encontrada"}

@router.patch("/{formulario_id}")
async def patch_formulario(propriedades_atualizacao: FormularioUpdate, formulario_id: int, response: Response):
    try:
        formulario_salvo = await Formulario.objects.get(id=formulario_id)
        propriedades_atualizadas = propriedades_atualizacao.dict(exclude_unset=True)
        await formulario_salvo.update(**propriedades_atualizadas)
        return formulario_salvo
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {"mensagem": "Entidade não encontrada"}
    
@router.delete("/{formulario_id}")
async def delete_formulario(formulario_id: int, response: Response):
    try:
        formulario = await Formulario.objects.get(id=formulario_id)
        return await formulario.delete()
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {"mensagem": "Entidade não encontrada"}