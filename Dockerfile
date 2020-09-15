FROM node:12
MAINTAINER Motion Bank

WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 3030
ENTRYPOINT ["node", "src"]
