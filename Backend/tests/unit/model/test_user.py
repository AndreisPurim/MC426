from tests.utils.users import create_valid_user, create_invalid_user
from models.user import User
import pytest

def test_cria_user_valido() -> None:
    atributos = create_valid_user()
    user = User(**atributos)

def test_cria_user_invalido() -> None:
    with pytest.raises(ValueError, match='Email em formato inválido!'):
        atributos = create_invalid_user(['email'])
        user = User(**atributos)
