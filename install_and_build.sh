#!/bin/sh

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

[localhost:static/](http://168.107.44.229:8081/static/)
ml-latest-small.zip
echo `1.무비렌즈 데이터셋이 필요합니다. 없으면 Readme에 있는 파일을 다운받아서 다음 경로에다 넣어주세요. : src/dataset`
echo `https://github.com/user-attachments/files/22620930/ml-latest-small.zip`

echo `2.env 파일설정이 필요합니다. src/dataset에 .env파일을 넣어주세요`
if [ ! -f "$PROJECT_ROOT/.env" ]; then
  echo `.env 파일을 열어서 데이터베이스 설정을 완료해주세요`
  exit 1
fi

echo `3.Docker 빌드`
cd ./example
docker-compose up -d --build

echo `4.로컬 접속 주소`
echo `localhost:8081/static/`
echo `5.배포 주소`
echo `http://168.107.44.229:8081/static/`
