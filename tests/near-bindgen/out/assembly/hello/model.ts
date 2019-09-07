import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

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
    if (name == "gas") {
      this.value.gas = <i32>value;
      return;
     }
    if (name == "balance") {
      this.value.balance = <i32>value;
      return;
     }
    if (name == "callbackBalance") {
      this.value.callbackBalance = <i32>value;
      return;
     }
    if (name == "callbackGas") {
      this.value.callbackGas = <i32>value;
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

export class __near_JSONHandler_InputPromiseArgs extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_JSONHandler_InputPromiseArgs>;
  handledRoot: boolean = false;
  value: InputPromiseArgs;

  constructor(value_: InputPromiseArgs) {
    super();
    this.value = value_;
  }
      
  setNull(name: string): void {
    if (name == "args") {
        this.value.args = <PromiseArgs>null
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

export class PromiseArgs {
  receiver: string;
  methodName: string;
  args: PromiseArgs;
  gas: i32;
  balance: i32;
  callback: string;
  callbackArgs: PromiseArgs;
  callbackBalance: i32;
  callbackGas: i32;

  static decode(json: Uint8Array): PromiseArgs {
    let value = instantiate<PromiseArgs>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(json: Obj): PromiseArgs {
    let obj: Obj = json;
    this.receiver = decode<string>(obj, "receiver");
    this.methodName = decode<string>(obj, "methodName");
    this.args = decode<PromiseArgs>(obj, "args");
    this.gas = decode<i32>(obj, "gas");
    this.balance = decode<i32>(obj, "balance");
    this.callback = decode<string>(obj, "callback");
    this.callbackArgs = decode<PromiseArgs>(obj, "callbackArgs");
    this.callbackBalance = decode<i32>(obj, "callbackBalance");
    this.callbackGas = decode<i32>(obj, "callbackGas");
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string>(encoder, this.receiver, "receiver");
    encode<string>(encoder, this.methodName, "methodName");
    encode<PromiseArgs>(encoder, this.args, "args");
    encode<i32>(encoder, this.gas, "gas");
    encode<i32>(encoder, this.balance, "balance");
    encode<string>(encoder, this.callback, "callback");
    encode<PromiseArgs>(encoder, this.callbackArgs, "callbackArgs");
    encode<i32>(encoder, this.callbackBalance, "callbackBalance");
    encode<i32>(encoder, this.callbackGas, "callbackGas");
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
export class InputPromiseArgs {
  args: PromiseArgs;

  static decode(json: Uint8Array): InputPromiseArgs {
    let value = instantiate<InputPromiseArgs>(); // Allocate without constructor
    value.decode(JSON.parse(json));
    return value;
  }

  decode(json: Obj): InputPromiseArgs {
    let obj: Obj = json;
    this.args = decode<PromiseArgs>(obj, "args");
    return this;
  }

  

  encode(_encoder: JSONEncoder | null = null, name: string | null = ""): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<PromiseArgs>(encoder, this.args, "args");
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

  decode(json: Obj): MyContractPromiseResult {
    let obj: Obj = json;
    this.ok = decode<bool>(obj, "ok");
    this.r = decode<MyCallbackResult>(obj, "r");
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

  decode(json: Obj): MyCallbackResult {
    let obj: Obj = json;
    this.rs = decode<Array<MyContractPromiseResult>>(obj, "rs");
    this.n = decode<string>(obj, "n");
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