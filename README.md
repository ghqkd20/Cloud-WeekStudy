# Cloud-WeekStudy
## 1 Weeks

### 1. Node JS Image
    1) app.js
    2) Dockerfile
### 2. Postgres Image
    1) init.sql
    2) Dockerfile
### 3. docker-compose
    1) docker-compose.yml
      서비스 별 DockerFile, Build, Run 명령어 구현

### Execution Guide
    - docker-compose up -d
   

#### Learning
    1. 소스 수정 후엔 docker 재 빌드 필요. 
    2. Compose로 서비스들 Run할 시에 같은 네트워크 사용
    3. DB 접근 방법
      3.1) IP주소 (동적일 시 연결 힘듬)
      3.2) 호스트 네임
        Docker Compose로 실행시 같은 네트워크를 사용, 서비스 네임 명시 후 호스트 네임과 동일하게 접근 가능
    4. Volume
      4.1) Docker-Compose로 서비스 실행 시 기본적으로 볼륨 생성
      4.2) 명시적으로 각 서비스의 Volume을 지정가능, Volume명도 지정 가능
      4.3) Volume 명을 명시적으로 생성시 컨테이너 삭제 후 재 실행하면 해당 볼륨 사용 
