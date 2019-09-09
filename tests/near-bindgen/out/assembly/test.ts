import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";


//@ts-ignore
function __wrapper_convertFoobars(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: Array<ContainerClass> = convertFoobars(decode<Array<FooBar>, Obj>(obj, "foobars"));

  let encoder = new JSONEncoder();
  if ((isString<Array<ContainerClass>>() || isNullable<Array<ContainerClass>>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<Array<ContainerClass>>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_convertFoobars as convertFoobars }


//@ts-ignore
function __wrapper_getStringArrayLength(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: i32 = getStringArrayLength(decode<Array<string>, Obj>(obj, "arr"));

  let encoder = new JSONEncoder();
  if ((isString<i32>() || isNullable<i32>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<i32>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getStringArrayLength as getStringArrayLength }


//@ts-ignore
function __wrapper_rewrapFoobar(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: AnotherContainerClass = rewrapFoobar(decode<ContainerClass, Obj>(obj, "container"));

  let encoder = new JSONEncoder();
  if ((isString<AnotherContainerClass>() || isNullable<AnotherContainerClass>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<AnotherContainerClass>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_rewrapFoobar as rewrapFoobar }


//@ts-ignore
function __wrapper_unwrapFoobar(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: FooBar = unwrapFoobar(decode<AnotherContainerClass, Obj>(obj, "container"));

  let encoder = new JSONEncoder();
  if ((isString<FooBar>() || isNullable<FooBar>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<FooBar>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_unwrapFoobar as unwrapFoobar }


//@ts-ignore
function __wrapper_stringOrNull(): void {
  let result: string | null = stringOrNull();

  let encoder = new JSONEncoder();
  if ((isString<string >() || isNullable<string >()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string >(encoder, result!, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_stringOrNull as stringOrNull }


//@ts-ignore
function __wrapper_stringAliasTest(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: StringAlias = stringAliasTest(decode<StringAlias, Obj>(obj, "str"));

  let encoder = new JSONEncoder();
  if ((isString<StringAlias>() || isNullable<StringAlias>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<StringAlias>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_stringAliasTest as stringAliasTest }

import * as main from "./main"
import {
  base64,
  logging
} from "near-runtime-ts"
import {
  FooBar,
  Nullables,
  ContainerClass,
  AnotherContainerClass
} from "./model"
import {
  u128
} from "bignum"
export function runTest(): void {
  logging.log("starting test");
  const original = new FooBar();
  original.u32Arr = [42, 11];
  original.foo = 321;
  original.bar = 123;
  original.flag = true;
  original.baz = "foo";
  original.uint8array = base64.decode("aGVsbG8sIHdvcmxkIQ==");
  original.u128Val = new u128(128);
  original.arr = [["Hello"], ["World"]];
  original.uint8arrays = Array.create<Uint8Array>(2);
  original.uint8arrays[0] = base64.decode("aGVsbG8sIHdvcmxkIQ==");
  original.uint8arrays[1] = base64.decode("aGVsbG8sIHdvcmxkIQ==");
  original.u64Arr = [10000000000, 100000000000];
  const encoder = original.encode();
  logging.log("Before: " + encoder.toString());
  const encoded = encoder.serialize();
  let decoded: FooBar = decode<FooBar>(encoded);
  logging.log("After:  " + decoded.toJSON());
  assert(original.foo == decoded.foo);
  assert(original.bar == decoded.bar);
  assert(base64.encode(original.uint8array) == base64.encode(decoded.uint8array));
  assert(base64.encode(original.uint8arrays[0]) == base64.encode(decoded.uint8arrays[0]));
  assert(original.arr[0][0] == "Hello");
  assert(original.u64Arr[0] == decoded.u64Arr[0]);
  assert(original.u64_zero == decoded.u64_zero);
  const nullable = new Nullables();
  const nullable2 = decode<Nullables>(nullable.serialize());
  assert(nullable2.str == null);
  assert(nullable2.u128 == <u128>null);
  assert(nullable2.uint8Array == null);
  logging.log("Test Passed");
}
function convertFoobars(foobars: Array<FooBar>): Array<ContainerClass> {
  return main.convertFoobars(foobars);
}
function getStringArrayLength(arr: Array<string>): i32 {
  return main.getStringArrayLength(arr);
}
function rewrapFoobar(container: ContainerClass): AnotherContainerClass {
  return main.rewrapFoobar(container);
}
function unwrapFoobar(container: AnotherContainerClass): FooBar {
  return main.unwrapFoobar(container);
}
function stringOrNull(): string | null {
  return main.stringOrNull();
}
type StringAlias = string
function stringAliasTest(str: StringAlias): StringAlias {
  return str + " World";
}