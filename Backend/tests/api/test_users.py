from fastapi.testclient import TestClient
from models.user import User
from tests.utils.users import create_valid_user

def test_create_user(client: TestClient) -> None:
    body = create_valid_user()
    #when
    response = client.post("/users/", json=body)
    content = response.json()
    #then
    assert response.status_code == 200
    assert content["nome"] == body["nome"]

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

