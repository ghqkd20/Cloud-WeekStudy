docker build -t my-postgres-db .
docker run -d -p 5432:5432 my-postgres-db