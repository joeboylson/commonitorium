FROM node:18-alpine as base

WORKDIR /client
COPY ./package*.json /client/

# PRODUCTION STAGE

FROM base AS production

ENV NODE_ENV=production
RUN echo "???"


# DEVELOPMENT STAGE

FROM base AS dev

ENV NODE_ENV=development

RUN npm install
COPY . /
CMD ["npm", "run", "start:dev"]