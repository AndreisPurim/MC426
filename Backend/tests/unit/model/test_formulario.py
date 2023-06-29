from fastapi.testclient import TestClient
import ormar
from tests.utils.formulario import create_formulario_valido
from models.formulario import Formulario
import pytest
import asyncio

def test_cria_formulario_valido() -> None:
    atributos = create_formulario_valido()
    formulario = Formulario(**atributos)

def test_obtem_um_forms_por_id(client: TestClient) -> None:
    atributos = create_formulario_valido()
    formulario = Formulario(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(formulario.save())

    response = client.get(f"/formulario/{formulario.id}")
    content = response.json()

    assert response.status_code == 200
    assert content["conteudo"] == formulario.conteudo

def test_obtem_formulario_inexistente_por_id(client: TestClient) -> None:
    response = client.get(f"/formulario/1")
    content = response.json()

    assert response.status_code == 404
    assert content["detail"] == "Entidade não encontrada"

def test_update_formulario_existente(client: TestClient) -> None:
    atributos = create_formulario_valido()
    formulario = Formulario(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(formulario.save())

    novo_nome = "Novo nome"
    atributos_para_atualizar = {"conteudo": novo_nome}

    response = client.patch(f"/formulario/{formulario.id}", json=atributos_para_atualizar)
    content = response.json()

    formulario_atualizado = loop.run_until_complete(Formulario.objects.get(id=formulario.id))

    assert response.status_code == 200
    assert content["conteudo"] == novo_nome
    assert formulario_atualizado.conteudo == novo_nome

def test_update_formulario_inexistente(client: TestClient) -> None:
    novo_nome = "Novo nome"
    atributos_para_atualizar = {"conteudo": novo_nome}

    response = client.patch(f"/formulario/1", json=atributos_para_atualizar)
    content = response.json()

    assert response.status_code == 404
    assert content["detail"] == "Entidade não encontrada"

def test_delete_formulario_existente(client: TestClient) -> None:
    atributos = create_formulario_valido()
    formulario = Formulario(**atributos)
    loop = asyncio.get_event_loop()
    loop.run_until_complete(formulario.save())

    response = client.delete(f"/formulario/{formulario.id}")
    with pytest.raises(ormar.exceptions.NoMatch): 
        loop.run_until_complete(Formulario.objects.get(id=formulario.id))

    assert response.status_code == 200

def test_delete_formulario_inexistente(client: TestClient) -> None:
    response = client.delete(f"/formulario/1")
    content = response.json()

    assert response.status_code == 404
    assert content["detail"] == "Entidade não encontrada"