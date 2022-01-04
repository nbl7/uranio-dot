#syntax=docker/dockerfile:experimental

FROM node:16

WORKDIR /app

COPY .bash_docker /app

RUN cat .bash_docker >> ~/.bashrc

ENV TERM xterm-256color

RUN mkdir ~/.ssh/ && ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts

RUN --mount=type=ssh yarn global add uranio-cli

ARG user

ARG uid

ARG gid

RUN groupadd -g $gid -o $user

RUN useradd -m -u $uid -g $gid -o -s /bin/bash $user

USER $user

COPY package.json /app

ARG repo

ARG deploy

ARG pacman

RUN --mount=type=ssh uranio init --force -vu --prefix_color --repo=$repo --deploy=$deploy --pacman=$pacman --docker=false

#COPY ./src /app/

#COPY .env /app

CMD ["uranio", "dev", "-vu", "--prefix_color", "--color_uranio=false"]

#CMD tail -f /dev/null
