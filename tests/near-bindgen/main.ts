import "allocator/arena";
// TODO: Why cannot import from index?
// import { BSONEncoder, BSONDecoder } from "./bson";
import { BSONEncoder } from "./bson/encoder";
import { BSONDecoder } from "./bson/decoder";

@external("env", "log")
declare function log(str: string): void;

declare function return_value(value_ptr: u32): void;

type Address = u64;

export function _init(initialOwner: Address): void {
}

export class FooBar {
    foo: i32 = 0;
    bar: i32 = 1;
    flag: bool;
    baz: string = "123";
    foobar: Uint8Array;
}

export class ContainerClass {
    foobar: FooBar
}

export function add(x: i32, y: i32): i32 {
    return x + y;
}

export function getFoobar(container: ContainerClass): FooBar {
    return container.foobar;
}
