FROM node:20-alpine

USER node

WORKDIR /server

COPY --chown=node:node package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]
