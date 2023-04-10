from databases import Database
import sqlalchemy

database = Database('mysql+aiomysql://root:Asif1217*@localhost:3306/practice')


async def connect_db():
    await database.connect()

async def insert():
    query = "insert into items(name, price) values(:name, :price)"
    values = {"name": "laptop", "price": 10000}
    await database.execute(query = query, values = values)