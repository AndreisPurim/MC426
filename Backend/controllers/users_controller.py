from fastapi import APIRouter, Response
import ormar
from models.requests.user_update import UserUpdate

from models.user import User

router = APIRouter()

@router.post("/")
async def add_item(user: User):
    await user.save()
    return user

@router.get("/")
async def list_item():
    return await User.objects.all()

@router.get("/{user_id}")
async def get_user(user_id: int, response: Response):
    try:
        user = await User.objects.get(id=user_id)
        return user
    except:
        response.status_code = 404
        return {"mensagem": "Entidade não encontrada"}

@router.patch("/{user_id}")
async def patch_user(propriedade_atualizacao: UserUpdate, papel_id: int, response: Response):
    try:
        user_salvo = await User.objects.get(id=papel_id)
        propriedades_atualizadas = propriedade_atualizacao.dict(exclude_unset=True)
        await user_salvo.update(**propriedades_atualizadas)
        return user_salvo
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {"mensagem": "Entidade não encontrada"}