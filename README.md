# docu-chat

Code repo for **docu-chat**, a 3-tier chat app (React, FastAPI, Postgres + pgvector).
FastAPI backend + Next.js frontend.

## Structure

```

docu-chat-app/
├── docker-compose.yml
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .python-version
│   ├── pyproject.toml
│   ├── uv.lock
│   └── app/
│       ├── __init__.py
│       └── main.py
└── frontend/
    ├── Dockerfile
    ├── .dockerignore
    ├── package.json
    ├── next.config.ts
    ├── public/
    └── app/
        ├── layout.tsx
        └── page.tsx
```


## Run everything

```bash
docker compose up --build
```

- App: http://localhost:3000
- API (via proxy): http://localhost:3000/api/timestamp

## Services

- [backend](./backend/README.md): FastAPI, managed with uv
- [frontend](./frontend/README.md): Next.js, proxies `/api/*` to the backend

## Local development (without Docker)

```bash
# terminal 1
cd backend && uv run uvicorn app.main:app --reload --port 8000

# terminal 2
cd frontend && npm run dev
```
