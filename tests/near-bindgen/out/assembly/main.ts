import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

import {
  storage,
  context,
  ContractPromise,
  logging,
  util
} from "near-runtime-ts"
import {
  FooBar,
  ContainerClass,
  AnotherContainerClass
} from "./model"
import {
  PromiseArgs,
  MyCallbackResult,
  MyContractPromiseResult
} from "./model"
export function doNothing(): void {}
export function add(x: i32, y: i32): i32 {
  return x + y;
}
export function rewrapFoobar(container: ContainerClass): AnotherContainerClass {
  let result = new AnotherContainerClass();
  result.foobars = [[<FooBar>container.foobar]];
  return result;
}
export function unwrapFoobar(container: AnotherContainerClass): FooBar {
  return <FooBar>container.foobars[0][0];
}
export function getStringArrayLength(arr: Array<string>): i32 {
  let length: i32 = arr.length;
  logging.log("getStringArrayLength: " + length.toString());
  return arr.length;
}
export function convertFoobars(foobars: Array<FooBar>): Array<ContainerClass> {
  return foobars.map<ContainerClass>(foobar => ({
    foobar: foobar
  }));
}
export function callbackWithName(args: PromiseArgs): MyCallbackResult {
  let contractResults = ContractPromise.getResults();
  let allRes = new Array<MyContractPromiseResult>(contractResults.length);
  for (let i = 0; i < contractResults.length; ++i) {
    allRes[i] = new MyContractPromiseResult();
    allRes[i].ok = contractResults[i].success;
    if (allRes[i].ok && contractResults[i].buffer != null && contractResults[i].buffer!.length > 0) {
      allRes[i].r = MyCallbackResult.decode(contractResults[i].buffer!);
    }
  }
  let result: MyCallbackResult = {
    rs: allRes,
    n: context.contractName
  };
  let bytes = result.encode();
  storage.setBytes("lastResult", bytes);
  return result;
}
export function stringOrNull(): string | null {
  return null;
}
export function metadata(): string {
  return "{\"functions\":[{\"name\":\"doNothing\",\"parameters\":[],\"returnType\":\"void\",\"stateMutability\":\"change\"},{\"name\":\"add\",\"parameters\":[{\"name\":\"x\",\"type\":\"i32\"},{\"name\":\"y\",\"type\":\"i32\"}],\"returnType\":\"i32\",\"stateMutability\":\"change\"},{\"name\":\"rewrapFoobar\",\"parameters\":[{\"name\":\"container\",\"type\":\"ContainerClass\"}],\"returnType\":\"AnotherContainerClass\",\"stateMutability\":\"change\"},{\"name\":\"unwrapFoobar\",\"parameters\":[{\"name\":\"container\",\"type\":\"AnotherContainerClass\"}],\"returnType\":\"FooBar\",\"stateMutability\":\"change\"},{\"name\":\"getStringArrayLength\",\"parameters\":[{\"name\":\"arr\",\"type\":\"Seq<string>\"}],\"returnType\":\"i32\",\"stateMutability\":\"change\"},{\"name\":\"convertFoobars\",\"parameters\":[{\"name\":\"foobars\",\"type\":\"Seq<FooBar>\"}],\"returnType\":\"Seq<ContainerClass>\",\"stateMutability\":\"change\"},{\"name\":\"callbackWithName\",\"parameters\":[{\"name\":\"args\",\"type\":\"PromiseArgs\"}],\"returnType\":\"MyCallbackResult\",\"stateMutability\":\"change\"},{\"name\":\"stringOrNull\",\"parameters\":[],\"returnType\":\"Option<string>\",\"stateMutability\":\"change\"}],\"classes\":[{\"name\":\"FooBar\",\"fields\":[{\"name\":\"foo\",\"type\":\"i32\"},{\"name\":\"bar\",\"type\":\"u32\"},{\"name\":\"u64Val\",\"type\":\"u64\"},{\"name\":\"u64_zero\",\"type\":\"u64\"},{\"name\":\"i64Val\",\"type\":\"i64\"},{\"name\":\"flag\",\"type\":\"bool\"},{\"name\":\"baz\",\"type\":\"string\"},{\"name\":\"uint8array\",\"type\":\"[u8]\"},{\"name\":\"arr\",\"type\":\"Seq<Seq<string>>\"},{\"name\":\"u32Arr\",\"type\":\"Seq<u32>\"},{\"name\":\"i32Arr\",\"type\":\"Seq<i32>\"},{\"name\":\"u128Val\",\"type\":\"u128\"},{\"name\":\"uint8arrays\",\"type\":\"Seq<[u8]>\"},{\"name\":\"u64Arr\",\"type\":\"Seq<u64>\"}]},{\"name\":\"ContainerClass\",\"fields\":[{\"name\":\"foobar\",\"type\":\"FooBar\"}]},{\"name\":\"AnotherContainerClass\",\"fields\":[{\"name\":\"foobars\",\"type\":\"Seq<Seq<FooBar>>\"}]},{\"name\":\"PromiseArgs\",\"fields\":[{\"name\":\"receiver\",\"type\":\"string\"},{\"name\":\"methodName\",\"type\":\"string\"},{\"name\":\"args\",\"type\":\"PromiseArgs\"},{\"name\":\"balance\",\"type\":\"i32\"},{\"name\":\"callback\",\"type\":\"string\"},{\"name\":\"callbackArgs\",\"type\":\"PromiseArgs\"},{\"name\":\"callbackBalance\",\"type\":\"i32\"}]},{\"name\":\"MyCallbackResult\",\"fields\":[{\"name\":\"rs\",\"type\":\"Seq<MyContractPromiseResult>\"},{\"name\":\"n\",\"type\":\"string\"}]},{\"name\":\"MyContractPromiseResult\",\"fields\":[{\"name\":\"ok\",\"type\":\"bool\"},{\"name\":\"r\",\"type\":\"MyCallbackResult\"}]}],\"contract\":null,\"version\":\"1.0\"}";
}