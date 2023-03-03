FROM node:18-alpine as base

WORKDIR /server

COPY ./package*.json /server/

ENV NODE_ENV=development

RUN npm install -g nodemon && npm install

COPY ./server /server
