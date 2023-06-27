from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*']
)


class Paragraph(BaseModel):
    text: str


@app.post("/count")
async def count(paragraph : Paragraph):
    return {"variable": len(paragraph.text)}
