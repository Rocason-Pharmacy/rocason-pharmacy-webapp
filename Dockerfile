FROM node:18-alpine3.17
WORKDIR /app
EXPOSE 80

COPY ./ ./

RUN yarn version

RUN npm install -g serve

RUN yarn install

RUN yarn run build

ENV PORT=80

CMD ["serve", "-s", "build"]