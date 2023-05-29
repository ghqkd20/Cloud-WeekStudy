const express = require('express');
const os = require('os');
const hostname = os.hostname();
const port = 3000;
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    host: 'postgres-db', // PostgreSQL 호스트 주소
    port: 5432,            // PostgreSQL 포트
    user: 'myuser',        // PostgreSQL 사용자 이름
    password: 'mypassword', // PostgreSQL 사용자 비밀번호
    database: 'mydatabase' // PostgreSQL 데이터베이스 이름
  });
  
  // 루트 경로에 대한 핸들러
app.get('/query', async (req, res) => {
    try {
      // 데이터베이스 쿼리 실행
      const query = 'SELECT * FROM users';
      const { rows } = await pool.query(query);
  
      // 결과 반환
      res.json(rows);
    } catch (error) {
      console.log(pool.host);
      console.error('Error executing querys', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.get('/',(req,res) => {
    res.send('Hello, World !');
});

app.listen(port, hostname,() => {
    console.log('Server Running at http://${hostname}:${port}/');
});

