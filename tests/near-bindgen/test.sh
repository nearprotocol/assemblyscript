#!/bin/sh
set -e
set -x
# BASEDIR=../..
(cd ..; npm run build:bindings:dev)
npm install
npm run build
npm run test
(cd ..; npm run build:bindings:prod)