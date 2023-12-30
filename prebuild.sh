#!/bin/sh

# 임시 디렉토리에 저장소를 클론합니다.
git clone https://github.com/devstefancho/open-wiki.git tmp_open-wiki

# 저장소의 특정 커밋으로 체크아웃합니다.
git checkout c49699e3ef53160ba779b733016940ab87352db4

mkdir -p data/blog

# 필요한 파일 또는 디렉토리를 data 디렉토리로 복사합니다.
cp -R tmp_open-wiki/* data/blog

echo "ls -al data/blog"

# 임시 디렉토리를 제거합니다.
rm -rf tmp_open-wiki
