from fastapi import APIRouter

from models.user import User

router = APIRouter()

@router.post("/")
async def add_item(user: User):
    await user.save()
    return user

@router.get("/")
async def list_item():
    return await User.objects.all()