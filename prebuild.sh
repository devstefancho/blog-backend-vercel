#!/bin/sh

# 임시 디렉토리에 저장소를 클론합니다.
git clone https://github.com/devstefancho/open-wiki.git tmp_open-wiki

mkdir -p data/blog

# 필요한 파일 또는 디렉토리를 data 디렉토리로 복사합니다.
cp -R tmp_open-wiki/* data/blog

# 임시 디렉토리를 제거합니다.
rm -rf tmp_open-wiki
