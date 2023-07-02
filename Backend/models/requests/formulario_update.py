from typing import List, Optional
from pydantic import BaseModel

class FormularioUpdate(BaseModel):
    conteudo: str