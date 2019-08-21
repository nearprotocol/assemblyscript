
const type = "u64";
export const preamble = `import { storage, near, base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";
// Runtime functions
@external("env", "read_register")
declare function read_register(register_id: ${type}, ptr: ${type}): void;
@external("env", "register_len")
declare function register_len(register_id: ${type}): ${type};

@external("env", "input")
declare function input(register_id: ${type}): void;
@external("env", "value_return")
declare function value_return(value_len: ${type}, value_ptr: ${type}): void;
@external("env", "panic")
declare function panic(): void;

function encode<T>(encoder: JSONEncoder, value: T, name: string | null = ""): JSONEncoder {
  let t: T;
  if (isBoolean<T>()){
    encoder.setBoolean(name, value);
  } else if (isInteger<T>()) {
    if (value instanceof i64 || value instanceof u64) {
      encoder.setString(name, value.toString());
    } else {
    //@ts-ignore
      encoder.setInteger(name, value);
    }
  } else if (value == <T>null){
    encoder.setNull(name);
  } else if (isString<T>()) {
    encoder.setString(name, value);
  } else if (isReference<T>()) {
    if (isArrayLike<T>(value)){
      if (t instanceof Uint8Array){
        encoder.setString("uint8array", base64.encode(<Uint8Array> value));
      } else {
        encoder.pushArray(name);
        for (let i: i32 = 0; i < value.length; i++){
          encode(encoder, value[i], null);
        }
        encoder.popArray()
      }
    } else {
      value.encode(encoder, name);
    }
  } else {
    throw new Error("Encoding failed");
  }
  return encoder;
}



class PrimitiveHandler<T> extends ThrowingJSONHandler  {
  value: T;

  static String: PrimitiveHandler<string>  = new PrimitiveHandler<string>();
  static Boolean: PrimitiveHandler<bool> = new PrimitiveHandler<bool>();
  static Integer: PrimitiveHandler<u64> = new PrimitiveHandler<u64>();

  decode(buffer: Uint8Array, state: DecoderState | null): T {
    let decoder = new JSONDecoder<PrimitiveHandler<T>>(this);
    decoder.deserialize(buffer, state);
    return this.value;
  }
  setString(name: string, value: string): void {
    if (isString<T>()){
      this.value = changetype<T>(value);
      return;
    }
    super.setString(name, value);
  }

  setBoolean(name: string, value: bool): void {
    if (isBoolean<T>()){
      this.value = changetype<T>(value);
      return;
    }
    super.setBoolean(name, value);
  }

  setNull(name: string): void {
    if (isString<T>()) {
      this.value = changetype<T>(null);
      return;
    }
    super.setNull(name);
  }

  setInteger(name: string, value: i64): void {
    if (isInteger<T>()){
      this.value = changetype<T>(value);
      return;
    }
    super.setInteger(name, value);
  }

}

class ArrayHandler<T> extends ThrowingJSONHandler {
  constructor(public value: Array<T>,
              public buffer: Uint8Array,
              public state: DecoderState | null){
                super();
              }

  static decode<T>(buffer: Uint8Array, state: DecoderState | null): T {
    let value = instantiate<T>();
    let handler = new ArrayHandler<valueof<T>>(value, buffer, state);
    let decoder = new JSONDecoder<ArrayHandler<valueof<T>>>(handler);
    decoder.deserialize(buffer, state);
    return value;
  }

  setString(name: string, value: string): void {
    if (isString<T>()){
      this.value.push(<string>value);
      return;
    }
    super.setString(name, value);
  }

  setBoolean(name: string, value: bool): void {
    if (isBoolean<T>()){
      this.value.push(<bool>value)
      return;
    }
    super.setBoolean(name, value);
  }

  setNull(name: string): void {
    if (isNullable<T>()) {
      this.value.push(<T>null);
      return;
    }
    super.setNull(name);
  }

  setInteger(name: string, value: i64): void {
    if (isInteger<T>()){
      this.value.push(<T>value);
      return;
    }
    super.setInteger(name, value);
  }

  pushObject(name: string): bool {
    // assert(name == null || name.length ==0, "name should be null.")
    if (isReference<T>()){
      let buffer = this.buffer;
      let state = this.state;
      let val: T = decode<T>(buffer, state);
      this.value.push(val);
      return false;
    }
    return super.pushObject(name);
  }

  pushArray(name: string): bool {
    assert(name == null || name.length ==0, "name should be null.");
    if (isArrayLike<T>()) {
      this.value.push(decode<T>(this.buffer, this.state));
      return false;
    } 
    return super.pushArray(name);
  }

}


function decode<T>(buffer: Uint8Array, state: DecoderState | null): T {
  if (isString<T>()){
    return PrimitiveHandler.String.decode(buffer, state);
  }
  if (isBoolean<T>()){
    return PrimitiveHandler.Boolean.decode(buffer, state);
  }
  if (isInteger<T>()) {
    return PrimitiveHandler.Integer.decode(buffer, state);
  }
  assert(isReference<T>(), "type must be an integer, boolean, string, object, or array");
  let value: T;
  if (isArrayLike<T>()) {
    if (value instanceof Uint8Array) {
      return base64.decode(PrimitiveHandler.String.decode(buffer, state))
    }
    return ArrayHandler.decode<T>(buffer, state);
  } else {
    value = instantiate<T>();
    return value.decode(buffer, state);
  }

}


`;
