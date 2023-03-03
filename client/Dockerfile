FROM node:18-alpine as base

WORKDIR /client

COPY ./package*.json /client/

FROM base AS dev

ENV NODE_ENV=development

RUN npm install

COPY ./client /client