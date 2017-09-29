FROM node:8
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD node index.js
EXPOSE 8001
