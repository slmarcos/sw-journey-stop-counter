FROM node:14-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./api/dist ./dist
COPY ./api/package.json .

RUN npm install --only=prod

CMD [ "npm", "run", "start" ]
