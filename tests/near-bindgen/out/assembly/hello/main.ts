import { storage, near, base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";


class __near_ArgsParser_hello extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_hello>;
  handledRoot: boolean = false;
  __near_param_name: string;
  setString(name: string, value: string): void {
    if (name == "name") {
      this.__near_param_name = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "name") {
        this.__near_param_name = <string>null
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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_hello(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_hello();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_hello>(handler);
  handler.decoder.deserialize(json);
  let result: string = hello(handler.__near_param_name);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_hello as hello }


class __near_ArgsParser_setKeyValue extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_setKeyValue>;
  handledRoot: boolean = false;
  __near_param_key: string;
  __near_param_value: string;
  setString(name: string, value: string): void {
    if (name == "key") {
      this.__near_param_key = <string>value;
      return;
     }
    if (name == "value") {
      this.__near_param_value = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "key") {
        this.__near_param_key = <string>null
         return;
      }
    if (name == "value") {
        this.__near_param_value = <string>null
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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_setKeyValue(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_setKeyValue();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_setKeyValue>(handler);
  handler.decoder.deserialize(json);
  setKeyValue(handler.__near_param_key, handler.__near_param_value);
}

export { __wrapper_setKeyValue as setKeyValue }


class __near_ArgsParser_getValueByKey extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_getValueByKey>;
  handledRoot: boolean = false;
  __near_param_key: string;
  setString(name: string, value: string): void {
    if (name == "key") {
      this.__near_param_key = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "key") {
        this.__near_param_key = <string>null
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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_getValueByKey(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_getValueByKey();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_getValueByKey>(handler);
  handler.decoder.deserialize(json);
  let result: string = getValueByKey(handler.__near_param_key);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getValueByKey as getValueByKey }


class __near_ArgsParser_setValue extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_setValue>;
  handledRoot: boolean = false;
  __near_param_value: string;
  setString(name: string, value: string): void {
    if (name == "value") {
      this.__near_param_value = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "value") {
        this.__near_param_value = <string>null
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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_setValue(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_setValue();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_setValue>(handler);
  handler.decoder.deserialize(json);
  let result: string = setValue(handler.__near_param_value);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_setValue as setValue }


//@ts-ignore
function __wrapper_getValue(): void {
  let result: string = getValue();

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getValue as getValue }


//@ts-ignore
function __wrapper_getAllKeys(): void {
  let result: Array<string> = getAllKeys();

  let encoder = new JSONEncoder();
  if ((isString<Array<string>>() || isNullable<Array<string>>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<Array<string>>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getAllKeys as getAllKeys }


//@ts-ignore
function __wrapper_benchmark(): void {
  let result: Array<string> = benchmark();

  let encoder = new JSONEncoder();
  if ((isString<Array<string>>() || isNullable<Array<string>>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<Array<string>>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark as benchmark }


class __near_ArgsParser_benchmark_storage extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_benchmark_storage>;
  handledRoot: boolean = false;
  __near_param_n: i32;
  setInteger(name: string, value: i64): void {
    if (name == "n") {
      this.__near_param_n = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_benchmark_storage(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_benchmark_storage();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_benchmark_storage>(handler);
  handler.decoder.deserialize(json);
  let result: string = benchmark_storage(handler.__near_param_n);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark_storage as benchmark_storage }


class __near_ArgsParser_limited_storage extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_limited_storage>;
  handledRoot: boolean = false;
  __near_param_max_storage: u64;
  setString(name: string, value: string): void {
    if (name == "max_storage") {
      this.__near_param_max_storage = U64.parseInt(value);
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_limited_storage(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_limited_storage();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_limited_storage>(handler);
  handler.decoder.deserialize(json);
  let result: string = limited_storage(handler.__near_param_max_storage);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_limited_storage as limited_storage }


class __near_ArgsParser_benchmark_sum_n extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_benchmark_sum_n>;
  handledRoot: boolean = false;
  __near_param_n: i32;
  setInteger(name: string, value: i64): void {
    if (name == "n") {
      this.__near_param_n = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_benchmark_sum_n(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_benchmark_sum_n();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_benchmark_sum_n>(handler);
  handler.decoder.deserialize(json);
  let result: string = benchmark_sum_n(handler.__near_param_n);

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark_sum_n as benchmark_sum_n }


//@ts-ignore
function __wrapper_returnHiWithLogs(): void {
  let result: string = returnHiWithLogs();

  let encoder = new JSONEncoder();
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<string>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_returnHiWithLogs as returnHiWithLogs }


class __near_ArgsParser_testSetRemove extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_testSetRemove>;
  handledRoot: boolean = false;
  __near_param_value: string;
  setString(name: string, value: string): void {
    if (name == "value") {
      this.__near_param_value = <string>value;
      return;
     }
    super.setString(name, value);
    }
  setNull(name: string): void {
    if (name == "value") {
        this.__near_param_value = <string>null
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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_testSetRemove(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_testSetRemove();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_testSetRemove>(handler);
  handler.decoder.deserialize(json);
  testSetRemove(handler.__near_param_value);
}

export { __wrapper_testSetRemove as testSetRemove }


class __near_ArgsParser_insertStrings extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_insertStrings>;
  handledRoot: boolean = false;
  __near_param_from: i32;
  __near_param_to: i32;
  setInteger(name: string, value: i64): void {
    if (name == "from") {
      this.__near_param_from = <i32>value;
      return;
     }
    if (name == "to") {
      this.__near_param_to = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_insertStrings(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_insertStrings();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_insertStrings>(handler);
  handler.decoder.deserialize(json);
  insertStrings(handler.__near_param_from, handler.__near_param_to);
}

export { __wrapper_insertStrings as insertStrings }


class __near_ArgsParser_deleteStrings extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_deleteStrings>;
  handledRoot: boolean = false;
  __near_param_from: i32;
  __near_param_to: i32;
  setInteger(name: string, value: i64): void {
    if (name == "from") {
      this.__near_param_from = <i32>value;
      return;
     }
    if (name == "to") {
      this.__near_param_to = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_deleteStrings(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_deleteStrings();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_deleteStrings>(handler);
  handler.decoder.deserialize(json);
  deleteStrings(handler.__near_param_from, handler.__near_param_to);
}

export { __wrapper_deleteStrings as deleteStrings }


class __near_ArgsParser_recurse extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_recurse>;
  handledRoot: boolean = false;
  __near_param_n: i32;
  setInteger(name: string, value: i64): void {
    if (name == "n") {
      this.__near_param_n = <i32>value;
      return;
     }
    super.setInteger(name, value);
    }
  setNull(name: string): void {

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

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_recurse(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_recurse();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_recurse>(handler);
  handler.decoder.deserialize(json);
  let result: i32 = recurse(handler.__near_param_n);

  let encoder = new JSONEncoder();
  if ((isString<i32>() || isNullable<i32>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<i32>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_recurse as recurse }


class __near_ArgsParser_callPromise extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_callPromise>;
  handledRoot: boolean = false;
  __near_param_args: PromiseArgs;
  setNull(name: string): void {
    if (name == "args") {
        this.__near_param_args = <PromiseArgs>null
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
          this.__near_param_args = decode<PromiseArgs>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_callPromise(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_callPromise();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_callPromise>(handler);
  handler.decoder.deserialize(json);
  callPromise(handler.__near_param_args);
}

export { __wrapper_callPromise as callPromise }


class __near_ArgsParser_callbackWithName extends ThrowingJSONHandler {
  buffer: Uint8Array;
  decoder: JSONDecoder<__near_ArgsParser_callbackWithName>;
  handledRoot: boolean = false;
  __near_param_args: PromiseArgs;
  setNull(name: string): void {
    if (name == "args") {
        this.__near_param_args = <PromiseArgs>null
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
          this.__near_param_args = decode<PromiseArgs>(this.buffer, this.decoder.state);
          return false;
        }

    return super.pushObject(name);
  }

  pushArray(name: string): bool {

    return super.pushArray(name);
  }
}

//@ts-ignore
function __wrapper_callbackWithName(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  let handler = new __near_ArgsParser_callbackWithName();
  handler.buffer = json;
  handler.decoder = new JSONDecoder<__near_ArgsParser_callbackWithName>(handler);
  handler.decoder.deserialize(json);
  let result: MyCallbackResult = callbackWithName(handler.__near_param_args);

  let encoder = new JSONEncoder();
  if ((isString<MyCallbackResult>() || isNullable<MyCallbackResult>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<MyCallbackResult>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_callbackWithName as callbackWithName }


//@ts-ignore
function __wrapper_getLastResult(): void {
  let result: MyCallbackResult = getLastResult();

  let encoder = new JSONEncoder();
  if ((isString<MyCallbackResult>() || isNullable<MyCallbackResult>()) && result == null) {
    encoder.setNull(null);
  } else {
    encode<MyCallbackResult>(encoder, result, null);
  }
  let val: Uint8Array = encoder.serialize();
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getLastResult as getLastResult }

import {
  context,
  storage,
  ContractPromise,
  near,
  logging
} from "near-runtime-ts"
import {
  PromiseArgs,
  InputPromiseArgs,
  MyCallbackResult,
  MyContractPromiseResult
} from "./model"
import {
  u128
} from "bignum"
function hello(name: string): string {
  return "hello " + name;
}
function setKeyValue(key: string, value: string): void {
  storage.setString(key, value);
}
function getValueByKey(key: string): string {
  return storage.getString(key)!;
}
function setValue(value: string): string {
  storage.setString("name", value);
  return value;
}
function getValue(): string {
  return storage.getString("name")!;
}
function getAllKeys(): Array<string> {
  let keys = storage.keys("n");
  assert(keys.length == 1);
  assert(keys[0] == "name");
  return keys;
}
function benchmark(): Array<string> {
  let i = 0;
  while (i < 10) {
    storage.setString(i.toString(), "123123");
    i += 1;
  }
  return storage.keys("");
}
function benchmark_storage(n: i32): string {
  let i = 0;
  while (i < n) {
    storage.setString(i.toString(), i.toString());
    i += 1;
  }
  i = 0;
  let sum: u64 = 0;
  while (i < n) {
    let item = I32.parseInt(storage.getString(i.toString()));
    sum += item;
    i += 1;
  }
  return sum.toString();
}
function limited_storage(max_storage: u64): string {
  let i = 0;
  while (context.storageUsage <= max_storage) {
    i += 1;
    storage.setString(i.toString(), i.toString());
  }
  if (context.storageUsage > max_storage) {
    storage.delete(i.toString());
  }
  return i.toString();
}
function benchmark_sum_n(n: i32): string {
  let i = 0;
  let sum: u64 = 0;
  while (i < n) {
    sum += i;
    i += 1;
  }
  return sum.toString();
}
export function generateLogs(): void {
  storage.setString("item", "value");
  logging.log("log1");
  logging.log("log2");
}
function returnHiWithLogs(): string {
  logging.log("loooog1");
  logging.log("loooog2");
  return "Hi";
}
export function triggerAssert(): void {
  logging.log("log before assert");
  assert(false, "expected to fail");
}
function testSetRemove(value: string): void {
  storage.setString("test", value);
  storage.delete("test");
  assert(storage.getString("test") == null, "Item must be empty");
}
function buildString(n: i32): string {
  assert(n >= 0);
  let result = "";
  for (let i = 20; i >= 0; --i) {
    result = result + result;
    if ((n >> i) & 1) {
      result += "a";
    }
  }
  return result;
}
function insertStrings(from: i32, to: i32): void {
  let str = buildString(to);
  for (let i = from; i < to; i++) {
    storage.setString(str.substr(to - i) + "b", "x");
  }
}
function deleteStrings(from: i32, to: i32): void {
  let str = buildString(to);
  for (let i = to - 1; i >= from; i--) {
    storage.delete(str.substr(to - i) + "b");
  }
}
function recurse(n: i32): i32 {
  if (n <= 0) {
    return n;
  }
  return recurse(n - 1) + 1;
}
function callPromise(args: PromiseArgs): void {
  let inputArgs: InputPromiseArgs = {
    args: args.args
  };
  let balance = args.balance as u64;
  let promise = ContractPromise.create(args.receiver, args.methodName, inputArgs.encode().serialize(), args.gas, new u128(args.balance));
  if (args.callback) {
    inputArgs.args = args.callbackArgs;
    let callbackBalance = args.callbackBalance as u64;
    promise = promise.then(context.contractName, args.callback, inputArgs.encode().serialize(), args.callbackGas, new u128(callbackBalance));
  }
  promise.returnAsResult();
}
function callbackWithName(args: PromiseArgs): MyCallbackResult {
  let contractResults = ContractPromise.getResults();
  let allRes = Array.create<MyContractPromiseResult>(contractResults.length);
  for (let i = 0; i < contractResults.length; ++i) {
    allRes[i] = new MyContractPromiseResult();
    allRes[i].ok = (contractResults[i].status == 1);
    if (allRes[i].ok && contractResults[i].buffer != null && contractResults[i].buffer.length > 0) {
      allRes[i].r = MyCallbackResult.decode(contractResults[i].buffer);
    }
  }
  let result: MyCallbackResult = {
    rs: allRes,
    n: context.contractName
  };
  let bytes = result.encode().serialize();
  storage.setBytes("lastResult", bytes);
  return result;
}
function getLastResult(): MyCallbackResult {
  return MyCallbackResult.decode(storage.getBytes("lastResult"));
}