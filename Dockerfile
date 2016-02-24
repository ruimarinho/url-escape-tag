FROM mhart/alpine-node:4

RUN adduser -S node

WORKDIR /home/node/app

COPY package.json /home/node/app/

RUN npm install --ignore-scripts --verbose

COPY . /home/node/app/

RUN chown -R node /home/node

USER node

ENTRYPOINT ["node"]

CMD ["--version"]
