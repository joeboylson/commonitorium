FROM node:18-alpine as base

WORKDIR /

COPY ./package*.json /

RUN npm install -g server
RUN npm install

COPY . /