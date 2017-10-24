FROM node:6.9.4

VOLUME /dist
COPY ./swagger-backend/app /dist
COPY ./swagger-backend/package.json /dist/
COPY ./swagger-backend/node_modules /dist/node_modules
EXPOSE 3001
WORKDIR /dist
RUN npm install -g yarn
ENTRYPOINT ["yarn", "start"]