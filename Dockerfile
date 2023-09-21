FROM node:20-alpine as Builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

RUN npm run build

FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
RUN npm cache clean --force
COPY --from=Builder /app/dist ./dist

CMD [ "npm", "run", "start", "--silent" ]
