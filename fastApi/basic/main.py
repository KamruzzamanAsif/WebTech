from fastapi import FastAPI
from model import Item

app = FastAPI()

@app.get('/')
async def read_root():
    return {'message': 'Hello World'}

@app.get('/{id}')
async def read_root(id: int):
    return {'message': 'Hello123'}

@app.get('/int/{id}', response_model= int)
async def read_int(id: int):
    return id

@app.get('/bool', response_model= bool)
async def read_bool():
    return True

@app.post("/item/", response_model=Item)
async def post_item(item: Item):
    return 

@app.put("/item/", response_model=Item)
async def put_item(item: Item):
    return item

@app.delete("/item/", response_model=Item)
async def delete_item(item: Item):
    return item