FROM node:18-alpine

RUN 

WORKDIR /app

COPY . .

RUN npm install