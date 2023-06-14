def create_valid_user():
    return {
        "id": 0,
        "nome": "string",
        "email": "PETR4",
        "senha": "string",
    }

def create_invalid_user(campos_invalidos=['email']):
    user_invalido = {
        "id": 0,
        "nome": "string",
        "email": "PETR4",
        "senha": "string",
    }

    if 'email' in campos_invalidos:
        user_invalido['email'] = 'AAAAAAAAAAAA'
    
    return user_invalido