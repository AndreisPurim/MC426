from typing import List, Optional
from pydantic import BaseModel

class UserUpdate(BaseModel):
    nome: Optional[str] = None