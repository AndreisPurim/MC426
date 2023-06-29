import ormar
from sqlalchemy.sql.expression import table
from config import database, metadata

from pydantic import BaseModel

class Formulario(ormar.Model):
    class Meta:
        metadata = metadata
        database = database
        tablename = "formularios"

    id: int = ormar.Integer(primary_key=True)
    conteudo: str = ormar.String(max_length=100)