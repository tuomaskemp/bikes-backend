FROM node:18

RUN apt update && apt install -y openssl

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npx prisma generate

COPY --chown=node:node . .

ENV NODE_ENV development

USER node

CMD npm run dev