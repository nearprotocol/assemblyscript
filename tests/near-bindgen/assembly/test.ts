import * as main from "./main";
// import * as model from "./model";
import { base64, logging } from "near-runtime-ts";
import { FooBar } from "./model";
import { u128 } from "bignum";

//@ts-ignore
// @external("env", "log_utf8")
// declare function log(str: string): void;

export function runTest(): void {
    logging.log("starting test");
    let original = new FooBar();
    logging.log("u64 = " + original.u64Val.toString())
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
    original.u64Arr =  [10000000000, 100000000000];
    let encoder = original.encode();
    logging.log(encoder.toString());
    // logging.log("hasntoehuasoetnuhasoentuhaseontuh")
    //@ts-ignore
    let encoded = encoder.serialize();
    //@ts-ignore
    let decoded: FooBar = decode<FooBar>(encoded);
    logging.log(decoded.toJSON());
    assert(original.foo == decoded.foo);
    assert(original.bar == decoded.bar);
    // assert(original.u32Arr == decoded.u32Arr);
    assert(base64.encode(original.uint8array) == base64.encode(decoded.uint8array));
    assert(base64.encode(original.uint8arrays[0]) == base64.encode(decoded.uint8arrays[0]));
    assert(original.arr[0][0] == "Hello");
    assert(original.u64Arr[0] == decoded.u64Arr[0]);
    // logging.log(testArrays.toString());
    // assert(original.uint8arrays == decoded.uint8arrays);
}

export function convertFoobars(): void {
    //@ts-ignore will be converted when parsed
    main.convertFoobars();
}

export function getStringArrayLength(): void {
    //@ts-ignore will be converted when parsed
    main.getStringArrayLength();
}

export function rewrapFoobar(): void {
    //@ts-ignore will be converted when parsed
    main.rewrapFoobar();
}

export function unwrapFoobar(): void {
    //@ts-ignore will be converted when parsed
    main.unwrapFoobar();
}
