from fastapi.testclient import TestClient
from models.user import User
from tests.utils.users import create_valid_user, create_invalid_user
import asyncio

def test_create_user(client: TestClient) -> None:
    body = create_valid_user()
    #when
    response = client.post("/users/", json=body)
    content = response.json()
    #then
    assert response.status_code == 200
    assert content["nome"] == body["nome"]

def test_create_user_invalid(client: TestClient) -> None:
    body = create_invalid_user(['email'])
    #when
    response = client.post("/users/", json=body)
    content = response.json()
    #then
    assert response.status_code == 422

def test_create_user_fail(client: TestClient) -> None:
    #when
    response = client.post("/users/", json={"email": 123})
    #then
    assert response.status_code == 422

def test_get_user(client: TestClient) -> None:
    #when
    response = client.get("/users")
    #then
    assert response.status_code == 200

def test_obtem_user_por_id(client: TestClient) -> None:
    atributos = create_valid_user()
    user = User(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(user.save())

    response = client.get(f"/users/{user.id}")
    content = response.json()

    assert response.status_code == 200
    assert content['email'] == user.email

def test_obtem_user_inexistente_por_id(client: TestClient) -> None:
    atributos = create_valid_user()
    user = User(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(user.save())

    response = client.get(f"/users/123")
    content = response.json()

    assert response.status_code == 404
    assert content['mensagem'] == "Entidade não encontrada"

def test_update_user_existente(client: TestClient) -> None:
    atributos = create_valid_user()
    user = User(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(user.save())

    novo_nome = "Novo nome"
    atributos_para_atualizar = {"nome": novo_nome}

    response = client.patch(f"/users/0", json=atributos_para_atualizar)
    content = response.json()

    user_atualizado = loop.run_until_complete(User.objects.get(id=user.id))
""" 
    assert response.status_code == 422
    assert content['nome'] == novo_nome
    assert user_atualizado.nome == novo_nome
 """

