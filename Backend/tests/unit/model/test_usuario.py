import email
from models.usuario import Usuario
from tests.factory.usuario_factory import UsuarioFactory
from models.formulario import Formulario
import pytest

def test_cria_usuario_valido() -> None:
    atributos = UsuarioFactory.get_prorpiedades_validas()
    usuario = Usuario(**atributos)

def test_cria_usuario_com_email_invalido() -> None:
    atributos = UsuarioFactory.get_prorpiedades_validas()
    with pytest.raises(ValueError, match='The user email format is invalid!'):
        atributos = UsuarioFactory.get_prorpiedades_validas({'email': "emailerrado"})
        usuario = Usuario(**atributos)