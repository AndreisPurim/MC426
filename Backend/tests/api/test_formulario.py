from fastapi.testclient import TestClient
from tests.utils.formulario import create_formulario_valido
from models import formulario

def test_cria_formulario(client: TestClient) -> None:
    body = create_formulario_valido()
    response = client.post("/formulario/", json=body)
    content = response.json()
    assert response.status_code == 200
    assert content["conteudo"] == body["conteudo"]