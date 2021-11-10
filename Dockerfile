FROM docker.io/library/node:14.18.1

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm install eslint@7.11.0
RUN npm install

CMD ["npm", "start"]
