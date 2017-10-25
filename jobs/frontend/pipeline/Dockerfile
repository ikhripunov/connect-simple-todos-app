FROM node:6.9.4

VOLUME /todo
WORKDIR /todo
RUN mkdir app
COPY ./swagger-frontend/build ./build/
COPY ./swagger-frontend/package.json .
COPY ./swagger-frontend/node_modules ./node_modules
EXPOSE 3000
RUN npm install -g yarn
ENTRYPOINT ["yarn", "start"]