import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

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

  decode(obj: Obj): PromiseArgs {
    this.receiver = obj.has("receiver") ? decode<string>(obj, "receiver"): this.receiver;
    this.methodName = obj.has("methodName") ? decode<string>(obj, "methodName"): this.methodName;
    this.args = obj.has("args") ? decode<PromiseArgs>(obj, "args"): this.args;
    this.gas = obj.has("gas") ? decode<i32>(obj, "gas"): this.gas;
    this.balance = obj.has("balance") ? decode<i32>(obj, "balance"): this.balance;
    this.callback = obj.has("callback") ? decode<string>(obj, "callback"): this.callback;
    this.callbackArgs = obj.has("callbackArgs") ? decode<PromiseArgs>(obj, "callbackArgs"): this.callbackArgs;
    this.callbackBalance = obj.has("callbackBalance") ? decode<i32>(obj, "callbackBalance"): this.callbackBalance;
    this.callbackGas = obj.has("callbackGas") ? decode<i32>(obj, "callbackGas"): this.callbackGas;
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

  decode(obj: Obj): InputPromiseArgs {
    this.args = obj.has("args") ? decode<PromiseArgs>(obj, "args"): this.args;
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