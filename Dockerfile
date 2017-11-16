FROM node:8

RUN mkdir -p /seneca-timesync-exercise
WORKDIR /seneca-timesync-exercise

COPY package.json /seneca-timesync-exercise

RUN npm install

COPY . /seneca-timesync-exercise
