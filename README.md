# APP

React + Vite frontend and Python + FastAPI backend.

## Run

```bash
npm run dev
```

Frontend: http://127.0.0.1:5173
Backend: http://127.0.0.1:3001/api/hello

The page shows Hello World from the frontend and the backend response.

## Install dependencies

```bash
npm ci
python3 -m venv backend/.venv
backend/.venv/bin/python -m pip install -r backend/requirements.txt
```

## Build frontend

```bash
npm run build
```

## Push changes to GitHub

From the project directory:

```bash
git add .
git commit -m "Describe your changes"
git push
```

The `main` branch tracks `origin/main` at https://github.com/lexielexiehhh/APP.
