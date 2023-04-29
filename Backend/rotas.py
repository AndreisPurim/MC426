from fastapi import APIRouter

from controllers import users_controller as users

router = APIRouter()

router.include_router(users.router, prefix='/users')