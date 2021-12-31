FROM node:16
WORKDIR /app
RUN npm install yarn -g
RUN yarn add uranio -g
COPY package.json /app
RUN uranio init -vu
COPY . /app
CMD ["uranio","dev"]
