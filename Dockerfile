# FROM node:14.10.0
# WORKDIR /app
# COPY . .
# RUN npm install

FROM node:14.15.4 as base

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
COPY . .
RUN npm install
RUN npm run test

FROM base as dev
COPY . .
RUN npm install

FROM base as prod
COPY . .
RUN npm install
CMD [ "node", "app.js" ]

