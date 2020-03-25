FROM node
WORKDIR /app
COPY . .
RUN npm i && \
    npm run build
VOLUME /app
CMD ['npm', 'start']