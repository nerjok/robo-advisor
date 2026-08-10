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
EXPOSE 443

# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "443", "--ssl-certfile", "./fullchain.pem", "--ssl-keyfile", "./privkey.pem"]
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
# CMD ["/bin/sh", "-c", "if [ -f /etc/letsencrypt/live/investicijuklubas.lt/fullchain.pem ] && [ -f /etc/letsencrypt/live/investicijuklubas.lt/privkey.pem ]; then uvicorn main:app --host 0.0.0.0 --port 8000 & uvicorn main:app --host 0.0.0.0 --port 443 --ssl-certfile /etc/letsencrypt/live/investicijuklubas.lt/fullchain.pem --ssl-keyfile /etc/letsencrypt/live/investicijuklubas.lt/privkey.pem & wait; else uvicorn main:app --host 0.0.0.0 --port 8000; fi"]

CMD ["/bin/sh", "-c", "if [ -f /app/fullchain.pem ] && [ -f /app/privkey.pem ]; then uvicorn main:app --host 0.0.0.0 --port 8000 & uvicorn main:app --host 0.0.0.0 --port 443 --ssl-certfile /app/fullchain.pem --ssl-keyfile /app/privkey.pem & wait; else uvicorn main:app --host 0.0.0.0 --port 8000; fi"]
