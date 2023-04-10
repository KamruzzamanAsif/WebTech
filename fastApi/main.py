import os
from fastapi import FastAPI


from model import *
from database import *

app = FastAPI()

@app.on_event("startup")
async def connect_with_database():
    await connect_db()


@app.post("/item", response_model=Item)
async def add_item(item: Item):
    await insert()
    return item
