
import { storage, near, base64, base58, logging } from 'near-runtime-ts';
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";
import { u128 } from "bignum";
// Runtime functions
// tslint:disable: no-unsafe-any



type Usize = u64;
//@ts-ignore
@global
@external("env", "read_register")
declare function read_register(register_id: Usize, ptr: Usize): void;
//@ts-ignore
@global
@external("env", "register_len")
declare function register_len(register_id: Usize): Usize;

//@ts-ignore
@global
@external("env", "input")
declare function input(register_id: Usize): void;
//@ts-ignore
@global
@external("env", "value_return")
declare function value_return(value_len: Usize, value_ptr: Usize): void;
//@ts-ignore
@global
@external("env", "panic")
declare function panic(): void;

//@ts-ignore
@global
function encode<T>(encoder: JSONEncoder, value: T, name: string | null = ""): JSONEncoder {
  if (isBoolean<T>()) {
    //@ts-ignore
    encoder.setBoolean(name, value);
  } else if (isInteger<T>()) {
    if (value instanceof i64 || value instanceof u64) {
      //@ts-ignore
      encoder.setString(name, value.toString());
    } else {
    //@ts-ignore
      encoder.setInteger(name, value);
    }
    //@ts-ignore
  } else if (value == <T>null) {
    encoder.setNull(name);
  } else if (isString<T>()) {
    //@ts-ignore
    encoder.setString(name, value);
  } else if (isReference<T>()) {
    if (isArrayLike<T>(value)) {
      if (value instanceof Uint8Array) {
        //@ts-ignore
        encoder.setString(name, base64.encode(<Uint8Array> value));
      } else {
        encoder.pushArray(name);
        for (let i: i32 = 0; i < value.length; i++) {
          //@ts-ignore
          encode(encoder, value[i], null);
        }
        encoder.popArray();
      }
    } else { // Is an object
      if (value instanceof u128){
        encoder.setString(name, value.toString());
      } else {
        //@ts-ignore
        value.encode(encoder, name);
      }
    }
  } else {
    throw new Error("Encoding failed");
  }
  return encoder;
}

class PrimitiveHandler<T> extends ThrowingJSONHandler  {
  value: T;
  decoder:  JSONDecoder<PrimitiveHandler<T>>;

  constructor() {
    super();
    this.decoder = new JSONDecoder<PrimitiveHandler<T>>(this);
  }

  static String: PrimitiveHandler<string>  = new PrimitiveHandler<string>();
  static Boolean: PrimitiveHandler<bool> = new PrimitiveHandler<bool>();
  static U64: PrimitiveHandler<u64> = new PrimitiveHandler<u64>();
  static I64: PrimitiveHandler<i64> = new PrimitiveHandler<i64>();
  static U32: PrimitiveHandler<u32> = new PrimitiveHandler<u32>();
  static I32: PrimitiveHandler<i32> = new PrimitiveHandler<i32>();

  decode(buffer: Uint8Array, state: DecoderState | null): T {
    this.decoder.deserialize(buffer, state);
    //@ts-ignore
    return this.value;
  }

  setString(name: string, value: string): void {
    if (isString<T>()) {
      //@ts-ignore
      this.value = <T>(value);
      return;
    }
    if (this.value instanceof u64) {
      //@ts-ignore
      this.value = <T>U64.parseInt(value);
      return;
    }
    if (this.value instanceof i64) {
      //@ts-ignore
      this.value =  <T>I64.parseInt(value);
      return;
    }
    super.setString(name, value);
  }

  setBoolean(name: string, value: bool): void {
    if (isBoolean<T>()) {
      //@ts-ignore
      this.value = <T>(value);
      return;
    }
    super.setBoolean(name, value);
  }

  setNull(name: string): void {
    if (isString<T>()) {
      //@ts-ignore
      this.value = <T>(null);
      return;
    }
    super.setNull(name);
  }

  setInteger(name: string, value: i64): void {
    if (isInteger<T>()) {
      //@ts-ignore
      this.value = <T>(value);
      return;
    }
    super.setInteger(name, value);
  }

}

function decodeString(buffer: Uint8Array, state: DecoderState | null ): string {
  return PrimitiveHandler.String.decode(buffer, state);
}
function decodeInt<T>(buffer: Uint8Array, state: DecoderState | null ): T {
  let val: T;
  //@ts-ignore
  if (val instanceof u32) {
    //@ts-ignore
    return PrimitiveHandler.U32.decode(buffer, state);
  } 
  //@ts-ignore
  if (val instanceof i32) {
    //@ts-ignore
    return PrimitiveHandler.I32.decode(buffer, state);
  } 
  //@ts-ignore
  if (val instanceof u64) {
    //@ts-ignore
    return PrimitiveHandler.U64.decode(buffer, state);
  } 
  //@ts-ignore
  if (val instanceof i64) {
    //@ts-ignore
    return PrimitiveHandler.I64.decode(buffer, state);
  }
  //@ts-ignore
  return val;
}

@global
class ArrayHandler<T> extends ThrowingJSONHandler {
  firstArrayPush: boolean = true;
  handledRoot: boolean = false;
  constructor(public value: Array<T>,
              public buffer: Uint8Array,
              public state: DecoderState | null) {
                super();
              }

  static decode<Arr>(buffer: Uint8Array, state: DecoderState | null): Arr {
    const value: Arr = instantiate<Arr>();
    //@ts-ignore
    const handler = new ArrayHandler<valueof<Arr>>(value, buffer, state);
    //@ts-ignore
    const decoder = new JSONDecoder<ArrayHandler<valueof<Arr>>>(handler);
    decoder.deserialize(buffer, state);
    return value;
  }

  setString(name: string, value: string): void {
    if (isString<T>()) {
      //@ts-ignore
      this.value.push(<string>value);
      return;
    }
    var item: T;
    //@ts-ignore
    if (item instanceof Uint8Array) {
      //@ts-ignore
      this.value.push(base64.decode(value));
      return;
    }
    //@ts-ignore
    if (item instanceof u64) {
      //@ts-ignore
      this.value.push(<T>U64.parseInt(value));
      return;
    }
    //@ts-ignore
    if (item instanceof i64) {
      //@ts-ignore
      this.value.push(<T>I64.parseInt(value));
      return;
    }
    super.setString(name, value);
  }

  setBoolean(name: string, value: bool): void {
    if (isBoolean<T>()) {
      //@ts-ignore
      this.value.push(<bool>value);
      return;
    }
    super.setBoolean(name, value);
  }

  setNull(name: string): void {
    if (isNullable<T>()) {
      //@ts-ignore
      this.value.push(<T>null);
      return;
    }
    super.setNull(name);
  }

  setInteger(name: string, value: i64): void {
    if (isInteger<T>()) {
      //@ts-ignore
      this.value.push(<T>value);
      return;
    }
    super.setInteger(name, value);
  }

  pushObject(name: string): bool {
    // if (!this.handledRoot) {
    //   this.handledRoot = true;
    //   return true;
    // }
    // assert(name == null || name.length ==0, "name should be null.")
    if (isReference<T>()) {
      let buffer = this.buffer;
      let state = this.state;
      let val: T = decode<T>(buffer, state);
      this.value.push(val);
      return false;
    }
    return super.pushObject(name);
  }

  pushArray(name: string): bool {
    if (this.firstArrayPush) {
      this.firstArrayPush = false;
      return true;
    }
    assert(name == null || name.length == 0, "name should be null.");
    if (isArrayLike<T>()) {
      this.value.push(decode<T>(this.buffer, this.state));
      return false;
    }
    return super.pushArray(name);
  }
}

//@ts-ignore
@global
function decode<T>(buffer: Uint8Array, state: DecoderState | null = null): T {
  if (isString<T>()) {
    //@ts-ignore
    return PrimitiveHandler.String.decode(buffer, state);
  }
  if (isBoolean<T>()) {
    //@ts-ignore
    return PrimitiveHandler.Boolean.decode(buffer, state);
  }
  if (isInteger<T>()) {
    //@ts-ignore
    return decodeInt<T>(buffer, state);
  }
  assert(isReference<T>(), "type must be an integer, boolean, string, object, or array");
  var value: T;
  if (isArrayLike<T>()) {
    //@ts-ignore only checking the instance
    if (value instanceof Uint8Array) {
      //@ts-ignore
      return base64.decode(PrimitiveHandler.String.decode(buffer, state));
    }
    return ArrayHandler.decode<T>(buffer, state);
  } else {
    //@ts-ignore
    if (value instanceof u128) {
      //@ts-ignore
      return u128.fromString(decodeString(buffer, state));
    }
    let value = instantiate<T>();
    //@ts-ignore
    return value.decode(buffer, state);
  }
}
