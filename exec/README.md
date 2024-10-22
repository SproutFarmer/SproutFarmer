# 포팅 매뉴얼

## 1. 빌드 및 배포 문서

### 제품 및 기술 버전

- Bakcend

  - JDK: 17
  - Spring Boot: 3.3.3
  - Apache Tomcat: 10.1.28
  - IntelliJ IDEA ultimate 2024.2.0.1
  - MySQL: 9.0.1
  - MongoDB: 7.0.14
  - Redis: 7.4.0
  - Docker: 27.3.1
  - Jenkins: 2.478

- Frontend

  - React: 18.3.1
  - Axios: 1.7.
  - Typescript: 4.9.5
  - Material UI: 6.1.1
  - React-Redux: 9.1.2
  - React-Router-Dom: 6.26.2

- BigData

  - Python: 3.8.6, 3,10.11, 3.12.6
  - Nginx: 1.18.0
  - Visual Studio Code: 1.93.0
  - Pytorch: 1.9.0
  - FastAPI: 0.95.0
  - Uvicorn: 0.21.1
  - MySQL: 9.0.1
  - MongoDB: 7.0.14
  - YOLOv5: 7.0
  - AquaCrop: 3.0.9
  - Docker: 27.3.1

### 환경 변수

- Backend

  - 서버 설정: BE/farmer/src/main/resources/application.yml
  - accessKey: REPLACE_WITH_YOUR_ACCESS_KEY
  - secretKey: REPLACE_WITH_YOUR_SECRET_KEY
  - bucket: REPLACE_WITH_YOUR_BUCKET_NAME
  - id: REPLACE_WITH_YOUR_NAVER_API_ID
  - key: REPLACE_WITH_YOUR_NAVER_API_KEY

- Frontend

  - 서버 설정: FE/package.json
  - REACT_APP_AWS_ACCESS_KEY_ID="REPLACE_WITH_YOUR_ACCESS_KEY"
  - REACT_APP_AWS_SECRET_ACCESS_KEY="REPLACE_WITH_YOUR_SECRET_KEY"
  - REACT_APP_AWS_REGION="REPLACE_WITH_YOUR_REGION"
  - REACT_APP_AWS_BUCKET_NAME="REPLACE_WITH_YOUR_BUCKET_NAME"
  - REACT_APP_KAKAO_MAP_API_KEY="REPLACE_WITH_YOUR_KAKAO_MAP_API_KEY"

- BigData

  - 서버 설정: DT/requirements.txt, PEST/yolo/requirements.txt, PEST/yolo/yolov5/requirements.txt
  - WEATHER_AUTH_KEY=REPLACE_WITH_YOUR_WEATHER_AUTH_KEY
  - MYSQL_HOST=REPLACE_WITH_YOUR_MYSQL_HOST
  - MYSQL_USER=REPLACE_WITH_YOUR_MYSQL_USER
  - MYSQL_PASSWORD=REPLACE_WITH_YOUR_MYSQL_PASSWORD
  - MYSQL_PORT=REPLACE_WITH_YOUR_MYSQL_PORT
  - MONGO_HOST=REPLACE_WITH_YOUR_MONGO_HOST
  - MONGO_USER=REPLACE_WITH_YOUR_MONGO_USER
  - MONGO_PASSWORD=REPLACE_WITH_YOUR_MONGO_PASSWORD
  - MONGO_PORT=REPLACE_WITH_YOUR_MONGO_PORT
  - API_KEY=REPLACE_WITH_YOUR_API_KEY
  - EC2_DB_ID=REPLACE_WITH_YOUR_EC2_DB_ID
  - EC2_DB_PW=REPLACE_WITH_YOUR_EC2_DB_PASSWORD
  - EC2_DB_HOST=REPLACE_WITH_YOUR_EC2_DB_HOST
  - EC2_DB_PORT=REPLACE_WITH_YOUR_EC2_DB_PORT
  - MYSQL_FASTAPI_URL=REPLACE_WITH_YOUR_FASTAPI_URL
  - MYSQL_FARMER_URL=REPLACE_WITH_YOUR_FARMER_URL
  - AWS_ACCESS_KEY_ID=REPLACE_WITH_YOUR_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY=REPLACE_WITH_YOUR_SECRET_ACCESS_KEY
  - AWS_REGION=REPLACE_WITH_YOUR_AWS_REGION
  - AWS_BUCKET_NAME=REPLACE_WITH_YOUR_BUCKET_NAME

### DB 접속 정보

- MySQL
  - url: REPLACE_WITH_YOUR_DATABASE_URL
  - username: REPLACE_WITH_YOUR_USERNAME
  - password: REPLACE_WITH_YOUR_PASSWORD

- MongoDB
  - url: REPLACE_WITH_YOUR_DATABASE_URL
  - username: REPLACE_WITH_YOUR_USERNAME
  - password: REPLACE_WITH_YOUR_PASSWORD

- Redis
  - In Memory 방식으로 동작.

## 2. 외부 서비스 정보

- Backend

  - AWS S3: 이미지 저장 서버
  - 네이버 지오코딩: 지번 주소 위·경도 변환
  - 공공데이터(날씨 단기예보): 단기예보 데이터

- Frontend

  - 카카오 지도: 주소 위·경도 변환하여 지도에 마커 표시

- BigData

  - 기상청 예특보: 단기예보구역, 기상특보구역, 기상특보현황
  - 기상청 지상관측: 지상관측 지점정보, 방재기상관측(AWS)
  - 흙토람: 작물별 토양환경지도(토양적성기준), 밭작물 물사용처방, 비료사용처방, 작물별 토양적성도
  - Kaggle: Toamato Data Set, PlantVillage Data Set
  - 농사로: 토마토, 고추, 가지, 오이, 옥수수, 무, 배추, 상추, 감자, 고구마, 콩, 대파
  - 공공데이터: 한국수자원조사기술원 주요 유역별 토양수분량 자료, 기상청 지상(종관, ASOS) 일자료 조회서비스, 농촌진흥청 국립농업과학원 작물별 비료 표준사용량 처방 정보, 농촌진흥청 국립농업과학원 토양도 기반 토양특성 단면정보, 농촌진흥청 국립농업과학원 토양도 기반 토양특성 상세정보V2, 농촌진흥청 국립농업과학원 토양도 기반 작물별 토양적성 통계정보, 기상청 단기예보 조회 서비스 오픈API가이드
  - AI-hub: 노지 작물 질병 진단 이미지, 시설 작물 질병 진단 이미지

## 3. DB 덤프 파일

- 첨부된 파일 참조
  - D207_MongoDB_farm_info_dump.zip: MongoDB DB 전체 dump파일
  - D207_MySQL_farmer_dump.sql: 스키마 전체 dml + ddl dump파일
  - D207_MySQL_fast_api_dump.sql:스키마 전체 dml + ddl dump파일

## 4. 시연 시나리오

[시연 시나리오](https://lab.ssafy.com/s11-bigdata-recom-sub1/S11P21D207/-/blob/master/exec/Scenarios.md?ref_type=heads)에 기재.
