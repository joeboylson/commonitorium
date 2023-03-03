FROM node:18-alpine as base

WORKDIR /

COPY ./package*.json /

RUN npm install -g serve
RUN npm install

COPY . /