#!/bin/sh
set -e
set -x
BASEDIR=../..
$BASEDIR/bin/asc model.ts --nearFile model_near.ts
$BASEDIR/bin/asc main.ts --nearFile main_near.ts
$BASEDIR/bin/asc main_near.ts -o main_near.wat
$BASEDIR/bin/asc test.ts -o test.wasm --textFile test.wat
prettier --parser typescript --write main_near.ts
prettier --parser typescript --write model_near.ts
node test.js
diff -U 5 expected.main_near.ts main_near.ts
diff -U 5 expected.model_near.ts model_near.ts
diff -U 5 expected.test.wat test.wat
