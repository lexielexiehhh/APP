import sys

from fastapi import FastAPI

app = FastAPI(title="APP")


@app.get("/api/hello")
async def hello():
    return {"message": "Hello World from the backend!"}


@app.get("/api/health")
async def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=3001,
        reload="--reload" in sys.argv,
    )
