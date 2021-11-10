FROM docker.io/library/node:14.18.1

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm i jquery --save

EXPOSE 3000

CMD ["npm", "start"]