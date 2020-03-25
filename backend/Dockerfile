FROM node
WORKDIR /app
COPY . .
RUN npm i && \
    npm run bootstrap
VOLUME /app
CMD ['npm', 'start']