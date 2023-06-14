from typing import List, Optional
from pydantic import BaseModel

class UserUpdate(BaseModel):
    nome: Optional[str] = None
    email: Optional[str] = None
    senha: Optional[str] = None