import ormar
import re
from pydantic import validator
from sqlalchemy.sql.expression import table
from config import database, metadata

class User(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = "users"

    id: int = ormar.Integer(primary_key=True)
    nome: str = ormar.String(max_length=100)
    email: str = ormar.String(max_length=100)
    senha: str = ormar.String(max_length=100)

    @validator('email')
    def valida_email(cls, v):
        if not re.compile('^[A-Z]{4}[0-9]{1,2}$').match(v):
            raise ValueError('Email em formato inválido!')
        return v
        