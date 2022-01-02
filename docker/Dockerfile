#syntax=docker/dockerfile:experimental

FROM node:16

WORKDIR /app

COPY .uranio/.docker/.bash_docker /app

RUN cat .bash_docker >> ~/.bashrc

ENV TERM xterm-256color

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh yarn global add uranio-cli

COPY package.json /app

ARG repo

ARG deploy

ARG pacman

RUN --mount=type=ssh uranio init --force -vu --repo=$repo --deploy=$deploy --pacman=$pacman --prefix_color

COPY ./src /app/

COPY .env /app

CMD ["uranio","dev","--prefix_color"]

#CMD tail -f /dev/null
