from pydantic import BaseModel

class Item(BaseModel):
    name = ""
    price = 0