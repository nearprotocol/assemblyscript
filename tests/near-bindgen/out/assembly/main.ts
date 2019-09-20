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
  return "{\"functions\":[{\"name\":\"doNothing\",\"parameters\":[],\"returnType\":\"void\",\"stateMutability\":false},{\"name\":\"add\",\"parameters\":[{\"name\":\"x\",\"type\":\"i32\"},{\"name\":\"y\",\"type\":\"i32\"}],\"returnType\":\"i32\",\"stateMutability\":false},{\"name\":\"rewrapFoobar\",\"parameters\":[{\"name\":\"container\",\"type\":\"ContainerClass\"}],\"returnType\":\"AnotherContainerClass\",\"stateMutability\":false},{\"name\":\"unwrapFoobar\",\"parameters\":[{\"name\":\"container\",\"type\":\"AnotherContainerClass\"}],\"returnType\":\"FooBar\",\"stateMutability\":false},{\"name\":\"getStringArrayLength\",\"parameters\":[{\"name\":\"arr\",\"type\":\"Array<string>\"}],\"returnType\":\"i32\",\"stateMutability\":false},{\"name\":\"convertFoobars\",\"parameters\":[{\"name\":\"foobars\",\"type\":\"Array<FooBar>\"}],\"returnType\":\"Array<ContainerClass>\",\"stateMutability\":false},{\"name\":\"callbackWithName\",\"parameters\":[{\"name\":\"args\",\"type\":\"PromiseArgs\"}],\"returnType\":\"MyCallbackResult\",\"stateMutability\":false},{\"name\":\"stringOrNull\",\"parameters\":[],\"returnType\":\"string | null\",\"stateMutability\":false}],\"classes\":[{\"name\":\"FooBar\",\"fields\":{\"foo\":\"i32\",\"bar\":\"u32\",\"u64Val\":\"u64\",\"u64_zero\":\"u64\",\"i64Val\":\"i64\",\"flag\":\"bool\",\"baz\":\"string\",\"uint8array\":\"Uint8Array\",\"arr\":\"Array<Array<string>>\",\"u32Arr\":\"Array<u32>\",\"i32Arr\":\"Array<i32>\",\"u128Val\":\"u128\",\"uint8arrays\":\"Array<Uint8Array>\",\"u64Arr\":\"Array<u64>\"}},{\"name\":\"ContainerClass\",\"fields\":{\"foobar\":\"FooBar\"}},{\"name\":\"AnotherContainerClass\",\"fields\":{\"foobars\":\"Array<Array<FooBar>>\"}},{\"name\":\"PromiseArgs\",\"fields\":{\"receiver\":\"string\",\"methodName\":\"string\",\"args\":\"PromiseArgs\",\"balance\":\"i32\",\"callback\":\"string\",\"callbackArgs\":\"PromiseArgs\",\"callbackBalance\":\"i32\"}},{\"name\":\"MyCallbackResult\",\"fields\":{\"rs\":\"Array<MyContractPromiseResult>\",\"n\":\"string\"}},{\"name\":\"MyContractPromiseResult\",\"fields\":{\"ok\":\"bool\",\"r\":\"MyCallbackResult\"}}],\"description\":null,\"version\":\"1.0\"}";
}