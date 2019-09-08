import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

export class __near_JSONHandler_FooBar extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_FooBar>;
  handledRoot: boolean = false;
  value: FooBar;

  constructor(value_: FooBar) {
    super();
    this.value = value_;
  }
      
  setInteger(name: string, value: i64): void {
    if (name == "foo") {
      this.value.foo = <i32>value;
      return;
     }
    if (name == "bar") {
      this.value.bar = <u32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setString(name: string, value: string): void {
    if (name == "u64Val") {
      this.value.u64Val = U64.parseInt(value);
      return;
     }
    if (name == "u64_zero") {
      this.value.u64_zero = U64.parseInt(value);
      return;
     }
    if (name == "i64Val") {
      this.value.i64Val = I64.parseInt(value);
      return;
     }
    if (name == "baz") {
      this.value.baz = <string>value;
      return;
     }
    if (name == "uint8array") {
       this.value.uint8array = base64.decode(value);
       return;
     }
    if (name == "u128Val") {
      this.value.u128Val = u128.fromString(value);
      return;
     }
    super.setString(name, value);
    }
  setBoolean(name: string, value: bool): void {
    if (name == "flag") {
      this.value.flag = <bool>value;
      return;
     }
    super.setBoolean(name, value);
    }
  setNull(name: string): void {
    if (name == "baz") {
        this.value.baz = <string>null
         return;
      }
    if (name == "uint8array") {
        this.value.uint8array = <Uint8Array>null
         return;
      }
    if (name == "arr") {
        this.value.arr = <Array<Array<string>>>null
         return;
      }
    if (name == "u32Arr") {
        this.value.u32Arr = <Array<u32>>null
         return;
      }
    if (name == "i32Arr") {
        this.value.i32Arr = <Array<i32>>null
         return;
      }
    if (name == "u128Val") {
        this.value.u128Val = <u128>null
         return;
      }
    if (name == "uint8arrays") {
        this.value.uint8arrays = <Array<Uint8Array>>null
         return;
      }
    if (name == "u64Arr") {
        this.value.u64Arr = <Array<u64>>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "u128Val") {
          this.value.u128Val = decode<u128>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {
       if (name == "arr") {
          this.value.arr = decode<Array<Array<string>>>(this.buffer, this.decoder.state);
          return false;
        }
       if (name == "u32Arr") {
          this.value.u32Arr = decode<Array<u32>>(this.buffer, this.decoder.state);
          return false;
        }
       if (name == "i32Arr") {
          this.value.i32Arr = decode<Array<i32>>(this.buffer, this.decoder.state);
          return false;
        }
       if (name == "uint8arrays") {
          this.value.uint8arrays = decode<Array<Uint8Array>>(this.buffer, this.decoder.state);
          return false;
        }
       if (name == "u64Arr") {
          this.value.u64Arr = decode<Array<u64>>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_Nullables extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_Nullables>;
  handledRoot: boolean = false;
  value: Nullables;

  constructor(value_: Nullables) {
    super();
    this.value = value_;
  }
      
  setString(name: string, value: string): void {
    if (name == "str") {
      this.value.str = <string>value;
      return;
     }
    if (name == "u128") {
      this.value.u128 = u128.fromString(value);
      return;
     }
    if (name == "uint8Array") {
       this.value.uint8Array = base64.decode(value);
       return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "str") {
        this.value.str = <string>null
         return;
      }
    if (name == "u128") {
        this.value.u128 = <u128>null
         return;
      }
    if (name == "uint8Array") {
        this.value.uint8Array = <Uint8Array>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "u128") {
          this.value.u128 = decode<u128>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_ContainerClass extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_ContainerClass>;
  handledRoot: boolean = false;
  value: ContainerClass;

  constructor(value_: ContainerClass) {
    super();
    this.value = value_;
  }
      
  setNull(name: string): void {
    if (name == "foobar") {
        this.value.foobar = <FooBar>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "foobar") {
          this.value.foobar = decode<FooBar>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_AnotherContainerClass extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_AnotherContainerClass>;
  handledRoot: boolean = false;
  value: AnotherContainerClass;

  constructor(value_: AnotherContainerClass) {
    super();
    this.value = value_;
  }
      
  setNull(name: string): void {
    if (name == "foobars") {
        this.value.foobars = <Array<Array<FooBar>>>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {
       if (name == "foobars") {
          this.value.foobars = decode<Array<Array<FooBar>>>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_PromiseArgs extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_PromiseArgs>;
  handledRoot: boolean = false;
  value: PromiseArgs;

  constructor(value_: PromiseArgs) {
    super();
    this.value = value_;
  }
      
  setInteger(name: string, value: i64): void {
    if (name == "balance") {
      this.value.balance = <i32>value;
      return;
     }
    if (name == "callbackBalance") {
      this.value.callbackBalance = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setString(name: string, value: string): void {
    if (name == "receiver") {
      this.value.receiver = <string>value;
      return;
     }
    if (name == "methodName") {
      this.value.methodName = <string>value;
      return;
     }
    if (name == "callback") {
      this.value.callback = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "receiver") {
        this.value.receiver = <string>null
         return;
      }
    if (name == "methodName") {
        this.value.methodName = <string>null
         return;
      }
    if (name == "args") {
        this.value.args = <PromiseArgs>null
         return;
      }
    if (name == "callback") {
        this.value.callback = <string>null
         return;
      }
    if (name == "callbackArgs") {
        this.value.callbackArgs = <PromiseArgs>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "args") {
          this.value.args = decode<PromiseArgs>(this.buffer, this.decoder.state);
          return false;
        }
       if (name == "callbackArgs") {
          this.value.callbackArgs = decode<PromiseArgs>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_MyContractPromiseResult extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_MyContractPromiseResult>;
  handledRoot: boolean = false;
  value: MyContractPromiseResult;

  constructor(value_: MyContractPromiseResult) {
    super();
    this.value = value_;
  }
      
  setBoolean(name: string, value: bool): void {
    if (name == "ok") {
      this.value.ok = <bool>value;
      return;
     }
    super.setBoolean(name, value);
    }
  setNull(name: string): void {
    if (name == "r") {
        this.value.r = <MyCallbackResult>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "r") {
          this.value.r = decode<MyCallbackResult>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_MyCallbackResult extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_MyCallbackResult>;
  handledRoot: boolean = false;
  value: MyCallbackResult;

  constructor(value_: MyCallbackResult) {
    super();
    this.value = value_;
  }
      
  setString(name: string, value: string): void {
    if (name == "n") {
      this.value.n = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "rs") {
        this.value.rs = <Array<MyContractPromiseResult>>null
         return;
      }
    if (name == "n") {
        this.value.n = <string>null
         return;
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {
       if (name == "rs") {
          this.value.rs = decode<Array<MyContractPromiseResult>>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushArray(name);
  }
}

export class __near_JSONHandler_Generic<T> extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_Generic<T>>;
  handledRoot: boolean = false;
  value: Generic<T>;

  constructor(value_: Generic<T>) {
    super();
    this.value = value_;
  }
      
  setInteger(name: string, value: i64): void {
    if (name == "value") {
      this.value.value = <T>value;
      return;
     }
    assert(isInteger<T>(), "value is not a Integer")
    super.setInteger(name, value);
    }
  setString(name: string, value: string): void {
    if (name == "value") {
      this.value.value = <T>I64.parseInt(value);
      return;
     }
    assert(isString<T>(), "value is not a String")
    super.setString(name, value);
    }
  setBoolean(name: string, value: bool): void {
    if (name == "value") {
      this.value.value = <T>value;
      return;
     }
    assert(isBoolean<T>(), "value is not a Boolean")
    super.setBoolean(name, value);
    }
  setNull(name: string): void {
    if (name == "value") {
       if (isNullable<T>()){
         this.value.value = <T>null
          return;
         }
      }

    super.setNull(name);
  }

  pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null || name.length == 0);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null || name.length != 0);
    }
       if (name == "value" && isReference<T>()) {
          this.value.value = decode<T>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

import {
  u128
} from "bignum"
import {
  logging
} from "near-runtime-ts"
export class FooBar {
  foo: i32 = 0;
  bar: u32 = 1;
  u64Val: u64 = 4294967297;
  u64_zero: u64;
  i64Val: i64 = -64;
  flag: bool;
  baz: string = "123";
  uint8array: Uint8Array;
  arr: Array<Array<string>>;
  u32Arr: Array<u32>;
  i32Arr: Array<i32>;
  u128Val: u128;
  uint8arrays: Array<Uint8Array>;
  u64Arr: Array<u64>;

  static decode(json: Uint8Array): FooBar {
    let value = instantiate<FooBar>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): FooBar {
    this.foo = obj.has("foo") ? decode<i32>(obj, "foo"): this.foo;
    this.bar = obj.has("bar") ? decode<u32>(obj, "bar"): this.bar;
    this.u64Val = obj.has("u64Val") ? decode<u64>(obj, "u64Val"): this.u64Val;
    this.u64_zero = obj.has("u64_zero") ? decode<u64>(obj, "u64_zero"): this.u64_zero;
    this.i64Val = obj.has("i64Val") ? decode<i64>(obj, "i64Val"): this.i64Val;
    this.flag = obj.has("flag") ? decode<bool>(obj, "flag"): this.flag;
    this.baz = obj.has("baz") ? decode<string>(obj, "baz"): this.baz;
    this.uint8array = obj.has("uint8array") ? decode<Uint8Array>(obj, "uint8array"): this.uint8array;
    this.arr = obj.has("arr") ? decode<Array<Array<string>>>(obj, "arr"): this.arr;
    this.u32Arr = obj.has("u32Arr") ? decode<Array<u32>>(obj, "u32Arr"): this.u32Arr;
    this.i32Arr = obj.has("i32Arr") ? decode<Array<i32>>(obj, "i32Arr"): this.i32Arr;
    this.u128Val = obj.has("u128Val") ? decode<u128>(obj, "u128Val"): this.u128Val;
    this.uint8arrays = obj.has("uint8arrays") ? decode<Array<Uint8Array>>(obj, "uint8arrays"): this.uint8arrays;
    this.u64Arr = obj.has("u64Arr") ? decode<Array<u64>>(obj, "u64Arr"): this.u64Arr;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<i32>(encoder, this.foo, "foo");
    encode<u32>(encoder, this.bar, "bar");
    encode<u64>(encoder, this.u64Val, "u64Val");
    encode<u64>(encoder, this.u64_zero, "u64_zero");
    encode<i64>(encoder, this.i64Val, "i64Val");
    encode<bool>(encoder, this.flag, "flag");
    encode<string>(encoder, this.baz, "baz");
    encode<Uint8Array>(encoder, this.uint8array, "uint8array");
    encode<Array<Array<string>>>(encoder, this.arr, "arr");
    encode<Array<u32>>(encoder, this.u32Arr, "u32Arr");
    encode<Array<i32>>(encoder, this.i32Arr, "i32Arr");
    encode<u128>(encoder, this.u128Val, "u128Val");
    encode<Array<Uint8Array>>(encoder, this.uint8arrays, "uint8arrays");
    encode<Array<u64>>(encoder, this.u64Arr, "u64Arr");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class Nullables {
  str: string;
  u128: u128;
  uint8Array: Uint8Array;

  static decode(json: Uint8Array): Nullables {
    let value = instantiate<Nullables>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): Nullables {
    this.str = obj.has("str") ? decode<string>(obj, "str"): this.str;
    this.u128 = obj.has("u128") ? decode<u128>(obj, "u128"): this.u128;
    this.uint8Array = obj.has("uint8Array") ? decode<Uint8Array>(obj, "uint8Array"): this.uint8Array;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string>(encoder, this.str, "str");
    encode<u128>(encoder, this.u128, "u128");
    encode<Uint8Array>(encoder, this.uint8Array, "uint8Array");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class ContainerClass {
  foobar: FooBar;

  static decode(json: Uint8Array): ContainerClass {
    let value = instantiate<ContainerClass>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): ContainerClass {
    this.foobar = obj.has("foobar") ? decode<FooBar>(obj, "foobar"): this.foobar;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<FooBar>(encoder, this.foobar, "foobar");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class AnotherContainerClass {
  foobars: Array<Array<FooBar>>;

  static decode(json: Uint8Array): AnotherContainerClass {
    let value = instantiate<AnotherContainerClass>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): AnotherContainerClass {
    this.foobars = obj.has("foobars") ? decode<Array<Array<FooBar>>>(obj, "foobars"): this.foobars;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<Array<Array<FooBar>>>(encoder, this.foobars, "foobars");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class PromiseArgs {
  receiver: string;
  methodName: string;
  args: PromiseArgs;
  balance: i32;
  callback: string;
  callbackArgs: PromiseArgs;
  callbackBalance: i32;

  static decode(json: Uint8Array): PromiseArgs {
    let value = instantiate<PromiseArgs>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): PromiseArgs {
    this.receiver = obj.has("receiver") ? decode<string>(obj, "receiver"): this.receiver;
    this.methodName = obj.has("methodName") ? decode<string>(obj, "methodName"): this.methodName;
    this.args = obj.has("args") ? decode<PromiseArgs>(obj, "args"): this.args;
    this.balance = obj.has("balance") ? decode<i32>(obj, "balance"): this.balance;
    this.callback = obj.has("callback") ? decode<string>(obj, "callback"): this.callback;
    this.callbackArgs = obj.has("callbackArgs") ? decode<PromiseArgs>(obj, "callbackArgs"): this.callbackArgs;
    this.callbackBalance = obj.has("callbackBalance") ? decode<i32>(obj, "callbackBalance"): this.callbackBalance;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string>(encoder, this.receiver, "receiver");
    encode<string>(encoder, this.methodName, "methodName");
    encode<PromiseArgs>(encoder, this.args, "args");
    encode<i32>(encoder, this.balance, "balance");
    encode<string>(encoder, this.callback, "callback");
    encode<PromiseArgs>(encoder, this.callbackArgs, "callbackArgs");
    encode<i32>(encoder, this.callbackBalance, "callbackBalance");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class MyContractPromiseResult {
  ok: bool;
  r: MyCallbackResult;

  static decode(json: Uint8Array): MyContractPromiseResult {
    let value = instantiate<MyContractPromiseResult>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): MyContractPromiseResult {
    this.ok = obj.has("ok") ? decode<bool>(obj, "ok"): this.ok;
    this.r = obj.has("r") ? decode<MyCallbackResult>(obj, "r"): this.r;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<bool>(encoder, this.ok, "ok");
    encode<MyCallbackResult>(encoder, this.r, "r");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class MyCallbackResult {
  rs: Array<MyContractPromiseResult>;
  n: string;

  static decode(json: Uint8Array): MyCallbackResult {
    let value = instantiate<MyCallbackResult>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): MyCallbackResult {
    this.rs = obj.has("rs") ? decode<Array<MyContractPromiseResult>>(obj, "rs"): this.rs;
    this.n = obj.has("n") ? decode<string>(obj, "n"): this.n;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<Array<MyContractPromiseResult>>(encoder, this.rs, "rs");
    encode<string>(encoder, this.n, "n");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}
export class Generic<T> {
  value: T;

  static decode(json: Uint8Array): Generic<T> {
    let value = instantiate<Generic<T>>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(obj: Obj): Generic<T> {
    this.value = obj.has("value") ? decode<T>(obj, "value"): this.value;
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<T>(encoder, this.value, "value");
    encoder.popObject();
    return encoder
  }

  serialize(): Uint8Array {
    return this.encode().serialize();
  }

  toJSON(): string {
    return this.encode().toString();
  }
}