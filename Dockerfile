FROM node:8.12.0-alpine

RUN apk add --no-cache curl

RUN mkdir -p /usr/src/unshaveme
WORKDIR /usr/src/unshaveme

COPY ./package.json ./yarn.lock ./
RUN yarn

COPY ./client ./client
COPY ./webpack.config.js ./.babelrc ./
RUN yarn run build:dist

COPY . .

EXPOSE 8080

HEALTHCHECK CMD curl --fail http://localhost:8080/health || exit 1

CMD [ "./www" ]