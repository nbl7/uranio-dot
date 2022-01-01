FROM node:17

WORKDIR /app

RUN alias ll='ls -oXAh'

RUN npm install uranio-cli -g

#RUN npm cache clean --fore

#RUN chown -R 1000:1000 "/root/.npm"

COPY package.json /app

COPY . /app

#CMD ["npx", "uranio","dev"]

CMD ["uranio","dev"]

#CMD tail -f /dev/null
