import ormar
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