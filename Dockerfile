FROM node:18.2.0

RUN mkdir /usr/app
WORKDIR /usr/app

RUN mkdir -p /volumes/cctv

COPY ./package*.json /usr/app/
COPY ./nvrjs.config.js /root

RUN apt update -y && apt upgrade -y

RUN apt install ffmpeg -y

RUN npm install

COPY . .

EXPOSE 7878

CMD ["node", "NVRJS.js"]
