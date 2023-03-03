FROM node:18-alpine as base

WORKDIR /

COPY ./package*.json /

ENV NODE_ENV=development

RUN npm install

COPY ./client /