FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# 不建議 COPY .env .env，讓 docker-compose 控制環境變數

RUN npm run build

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]