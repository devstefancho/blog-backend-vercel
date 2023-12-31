#!/bin/sh

## CLONE REPO
git clone https://github.com/devstefancho/open-wiki.git tmp_open-wiki
# git checkout c49699e3ef53160ba779b733016940ab87352db4

## MOVE FILES
mkdir -p data/blog
cp -R tmp_open-wiki/* /var/task/data/blog
rm -rf tmp_open-wiki
