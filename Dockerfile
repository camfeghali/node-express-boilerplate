FROM node:14.10.0
WORKDIR /app
COPY . .
RUN npm install