FROM node:18-alpine as base

WORKDIR /

COPY ./package*.json /

RUN npm install -g nodemon
RUN npm install

COPY ./server /
