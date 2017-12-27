FROM node:alpine
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
COPY *.js *.js
RUN npm install && npm cache clean --force
CMD [ "npm", "start" ]