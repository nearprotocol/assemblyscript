
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
  if (isInteger<T>()) {
    //@ts-ignore
    encoder.setInteger(name, value);
  } else if (isBoolean<T>()){
    encoder.setBoolean(name, value);
  } else if (value == <T>null){
    encoder.setNull(name);
  } else if (isString<T>()) {
    encoder.setString(name, value);
  } else if (isReference<T>()) {
    if (isArrayLike<T>(value)){
      encoder.pushArray(name);
      for (let i: i32 = 0; i < value.length; i++){
        encode(encoder, value[i], null);
      }
      encoder.popArray()
    } else {
      value.encode(encoder, name);
    }
  } else {
    throw Error("Encoding failed");
  }
  return encoder;
}


function decode<T>(buffer: Uint8Array, state: DecoderState | null): T {
  assert(isReference<T>());
  if (isArrayLike<T>()){

  } else {
    let res: T = instantiate<T>();
  }

}


`;
