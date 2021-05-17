FROM node:14 as base

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3005

CMD [ "npm run dev" ]