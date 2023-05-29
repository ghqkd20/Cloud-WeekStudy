# Base image 설정
FROM postgres:latest

# 환경 변수 설정 (선택사항)
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mypassword
ENV POSTGRES_DB mydatabase

# 초기화 SQL 스크립트 복사
COPY init.sql /docker-entrypoint-initdb.d/
