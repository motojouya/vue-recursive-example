FROM node:10.14.0

RUN npm install -g yarn && \
    mkdir /usr/local/src/vue-recursive-example && \
    chown node /usr/local/src/vue-recursive-example && \
    chmod 755 /usr/local/src/vue-recursive-example

WORKDIR /usr/local/src/vue-recursive-example
RUN chown -R node:node .

USER node

