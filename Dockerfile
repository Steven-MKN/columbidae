FROM node:18

WORKDIR /usr/src/node_playground

COPY package*.json /

RUN npm install
RUN npm install typescript -g


COPY . .
RUN npm run build

EXPOSE 8080

CMD ["node", "build/app.js"]



