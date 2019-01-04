
import * as main from "./main_near";

import { BSONEncoder } from "./bson/encoder";

@external("env", "log")
declare function log(str: string): void;

export function runTest(): void {
  let original = new main.FooBar();
  original.foo = 321;
  original.bar = 123;
  original.flag = true;
  original.baz = "foo";
  let encoder: BSONEncoder = new BSONEncoder();
  main.__near_encode_FooBar(original, encoder);
  let encoded = encoder.serialize();
  let decoded = main.__near_decode_FooBar(encoded, 0);

  assert(original.foo == decoded.foo);
  assert(original.bar == decoded.bar);

  let argsEncoder: BSONEncoder = new BSONEncoder();
  argsEncoder.setInteger("x", 1);
  argsEncoder.setInteger("y", 2);

  let addBsonStr = bin2hex(argsEncoder.serialize());
  let expectedResultEncoder: BSONEncoder = new BSONEncoder();
  expectedResultEncoder.setInteger("result", 3);

  /*
  let bsonResult = main.near_func_add(hex2bin(addBsonStr));

  let bsonResultStr = bin2hex(bsonResult);
  let expectedBsonResultStr = bin2hex(expectedResultEncoder.serialize())
  assert(bsonResultStr == expectedBsonResultStr, bsonResultStr + "\n" + expectedBsonResultStr);
  */
}

function hex2bin(hex: string): Uint8Array {
    let bin = new Uint8Array(hex.length >>> 1);
    for (let i = 0, len = hex.length >>> 1; i < len; i++) {
        bin[i] = u32(parseInt(hex.substr(i << 1, 2), 16));
    }
    return bin;
}

function bin2hex(bin: Uint8Array, uppercase: boolean = false): string {
    let hex = uppercase ? "0123456789ABCDEF" : "0123456789abcdef";
    let str = "";
    for (let i = 0, len = bin.length; i < len; i++) {
        str += hex.charAt((bin[i] >>> 4) & 0x0f) + hex.charAt(bin[i] & 0x0f);
    }
    return str;
}


runTest();