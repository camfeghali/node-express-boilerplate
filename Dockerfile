FROM node:14.10.0
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install
# CMD ["npm", "run", "migrate"]
# CMD ["node", "app.js"]