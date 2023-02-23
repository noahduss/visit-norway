FROM node:14

COPY . /app
WORKDIR /app 

RUN npm install

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start" ]
