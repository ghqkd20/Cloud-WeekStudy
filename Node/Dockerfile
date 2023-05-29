# Base image 설정
FROM node:14

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 종속성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 코드 복사
COPY . .

# 앱 실행
CMD [ "node", "app.js" ]
