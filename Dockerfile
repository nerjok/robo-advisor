# ---------------- FRONTEND BUILD ----------------
FROM node:24-alpine AS front-build

WORKDIR /app
COPY ./robo-advisor/ ./

RUN npm install && npm run build


# ---------------- BACKEND ----------------
FROM python:3.11-slim AS runtime

WORKDIR /app

# requirements
COPY ./bff/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# backend code
COPY ./bff .

# remove old frontend folder if exists
RUN rm -rf ./client

# copy frontend build from previous stage (FIXED PATH)
COPY --from=front-build /app/build/client ./client

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]