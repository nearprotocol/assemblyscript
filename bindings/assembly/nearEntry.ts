
import { storage, near, base64, base58, logging } from 'near-runtime-ts';
//@ts-ignore
import { Buffer } from "assemblyscript-json/util";
import { JSONEncoder, JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";
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



/// <reference types="../node_modules/assemblyscript/std/assembly/rt/index.d.ts" />

abstract class Value {
  static String(str: string): Value {
    return new Str(str)
  }
  static Number(num: i64): Value {
    return new Num(num)
  }
  static Bool(b: bool): Value {
    return new Bools(b)
  }
  static Null(): Value {
    return new Null();
  }
  static Array(): Value {
    return new Arr();
  }
  static Object(): Value {
    return new Obj();
  }
}
@global
class Str extends Value {
  constructor(public _str: string) {
    super();
  }
}
@global
class Num extends Value {
  constructor(public _num: i64) {
    super();
  }
}
@global
class Null extends Value {
  constructor() {
    super();
  }
}

@global class Bools extends Value {
  constructor(public _bool: bool) {
    super();
  }
}

@global
class Arr extends Value {
  _arr: Array<Value>;
  constructor() {
    super();
    this._arr = new Array<Value>();
  }

  push(obj: Value): void {
    this._arr.push(obj)
  }
}

@global
class Obj extends Value {
  _obj: Map<string, Value>;
  keys: Array<string>;

  constructor() {
    super();
    this._obj = new Map();
    this.keys = new Array();
  }

  set(key: string, value: Value): void {
    if (!this._obj.has(key)) {
      this.keys.push(key);
    }
    this._obj.set(key, value);
  }

  get(key: string): Value | null {
    if (!this._obj.has(key)) {
      return null;
    }
    return this._obj.get(key)
  }
}

class Handler extends ThrowingJSONHandler {
  stack: Value[];
  constructor() {
    super();
    this.stack = new Array<Value>();
  }

  reset(): void {
    while (this.stack.length > 0){
      this.stack.pop();
    }
  }

  get peek(): Value {
    return this.stack[this.stack.length - 1];
  }

  setString(name: string, value: string): void {
    let obj: Value = Value.String(value);
    this.addValue(name, obj);
  }

  setBoolean(name: string, value: bool): void {
    let obj = Value.Bool(value);
    this.addValue(name, obj);
  }

  setNull(name: string): void {
    let obj = Value.Null();
    this.addValue(name, obj);
  }

  setInteger(name: string, value: i64): void {
    let obj = Value.Number(value);
    this.addValue(name, obj);
  }

  pushArray(name: string): bool {
    let obj: Value = Value.Array();
    this.addValue(name, obj);
    this.stack.push(obj);
    return true;
  }

  popArray(): void {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
  }

  pushObject(name: string): bool {
    let obj: Value = Value.Object();
    this.addValue(name, obj);
    this.stack.push(obj)
    return true;
  }

  popObject(): void {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
  }

  addValue(name: string, obj: Value): void {
    if (name.length == 0 && obj instanceof Obj) {
      this.stack.push(obj);
      return;
    }
    if (this.peek instanceof Obj) {
      (this.peek as Obj).set(name, obj)
    }
    else if (this.peek instanceof Arr) {
      (<Arr>this.peek).push(obj);
    }
  }
}

@global()
class JSON {
  private static handler: Handler = new Handler();
  private static decoder: JSONDecoder<Handler> = new JSONDecoder<Handler>(JSON.handler);
  static parse(str: Uint8Array): Obj {
    let buffer: Uint8Array = isString(str) ? Buffer.fromString(str): <Uint8Array>str;
    JSON.decoder.deserialize(buffer);
    let res = JSON.handler.peek as Obj
    JSON.handler.reset();
    return res;
  }
}






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

// class PrimitiveHandler<T> extends ThrowingJSONHandler  {
//   value: T;
//   decoder:  JSONDecoder<PrimitiveHandler<T>>;

//   constructor() {
//     super();
//     this.decoder = new JSONDecoder<PrimitiveHandler<T>>(this);
//   }

//   static String: PrimitiveHandler<string>  = new PrimitiveHandler<string>();
//   static Boolean: PrimitiveHandler<bool> = new PrimitiveHandler<bool>();
//   static U64: PrimitiveHandler<u64> = new PrimitiveHandler<u64>();
//   static I64: PrimitiveHandler<i64> = new PrimitiveHandler<i64>();
//   static U32: PrimitiveHandler<u32> = new PrimitiveHandler<u32>();
//   static I32: PrimitiveHandler<i32> = new PrimitiveHandler<i32>();

//   decode(buffer: Uint8Array, state: DecoderState | null): T {
//     this.decoder.deserialize(buffer, state);
//     //@ts-ignore
//     return this.value;
//   }

//   setString(name: string, value: string): void {
//     if (isString<T>()) {
//       //@ts-ignore
//       this.value = <T>(value);
//       return;
//     }
//     if (this.value instanceof u64) {
//       //@ts-ignore
//       this.value = <T>U64.parseInt(value);
//       return;
//     }
//     if (this.value instanceof i64) {
//       //@ts-ignore
//       this.value =  <T>I64.parseInt(value);
//       return;
//     }
//     super.setString(name, value);
//   }

//   setBoolean(name: string, value: bool): void {
//     if (isBoolean<T>()) {
//       //@ts-ignore
//       this.value = <T>(value);
//       return;
//     }
//     super.setBoolean(name, value);
//   }

//   setNull(name: string): void {
//     if (isString<T>()) {
//       //@ts-ignore
//       this.value = <T>(null);
//       return;
//     }
//     super.setNull(name);
//   }

//   setInteger(name: string, value: i64): void {
//     if (isInteger<T>()) {
//       //@ts-ignore
//       this.value = <T>(value);
//       return;
//     }
//     super.setInteger(name, value);
//   }

// }

// function decodeString(buffer: Uint8Array, state: DecoderState | null ): string {
//   return PrimitiveHandler.String.decode(buffer, state);
// }
// function decodeInt<T>(buffer: Uint8Array, state: DecoderState | null ): T {
//   let val: T;
//   //@ts-ignore
//   if (val instanceof u32) {
//     //@ts-ignore
//     return PrimitiveHandler.U32.decode(buffer, state);
//   } 
//   //@ts-ignore
//   if (val instanceof i32) {
//     //@ts-ignore
//     return PrimitiveHandler.I32.decode(buffer, state);
//   } 
//   //@ts-ignore
//   if (val instanceof u64) {
//     //@ts-ignore
//     return PrimitiveHandler.U64.decode(buffer, state);
//   } 
//   //@ts-ignore
//   if (val instanceof i64) {
//     //@ts-ignore
//     return PrimitiveHandler.I64.decode(buffer, state);
//   }
//   //@ts-ignore
//   return val;
// }

// @global
// class ArrayHandler<T> extends ThrowingJSONHandler {
//   firstArrayPush: boolean = true;
//   handledRoot: boolean = false;
//   constructor(public value: Array<T>,
//               public buffer: Uint8Array,
//               public state: DecoderState | null) {
//                 super();
//               }

//   static decode<Arr>(buffer: Uint8Array, state: DecoderState | null = null): Arr {
//     const value: Arr = instantiate<Arr>();
//     //@ts-ignore
//     const handler = new ArrayHandler<valueof<Arr>>(value, buffer, state);
//     //@ts-ignore
//     const decoder = new JSONDecoder<ArrayHandler<valueof<Arr>>>(handler);
//     decoder.deserialize(buffer, state);
//     return value;
//   }

//   setString(name: string, value: string): void {
//     if (isString<T>()) {
//       //@ts-ignore
//       this.value.push(<string>value);
//       return;
//     }
//     var item: T;
//     //@ts-ignore
//     if (item instanceof Uint8Array) {
//       //@ts-ignore
//       this.value.push(base64.decode(value));
//       return;
//     }
//     //@ts-ignore
//     if (item instanceof u64) {
//       //@ts-ignore
//       this.value.push(<T>U64.parseInt(value));
//       return;
//     }
//     //@ts-ignore
//     if (item instanceof i64) {
//       //@ts-ignore
//       this.value.push(<T>I64.parseInt(value));
//       return;
//     }
//     super.setString(name, value);
//   }

//   setBoolean(name: string, value: bool): void {
//     if (isBoolean<T>()) {
//       //@ts-ignore
//       this.value.push(<bool>value);
//       return;
//     }
//     super.setBoolean(name, value);
//   }

//   setNull(name: string): void {
//     if (isNullable<T>()) {
//       //@ts-ignore
//       this.value.push(<T>null);
//       return;
//     }
//     super.setNull(name);
//   }

//   setInteger(name: string, value: i64): void {
//     if (isInteger<T>()) {
//       //@ts-ignore
//       this.value.push(<T>value);
//       return;
//     }
//     super.setInteger(name, value);
//   }

//   pushObject(name: string): bool {
//     // if (!this.handledRoot) {
//     //   this.handledRoot = true;
//     //   return true;
//     // }
//     // assert(name == null || name.length ==0, "name should be null.")
//     if (isReference<T>()) {
//       let buffer = this.buffer;
//       let state = this.state;
//       let val: T = decode<T>(buffer, state);
//       this.value.push(val);
//       return false;
//     }
//     return super.pushObject(name);
//   }

//   pushArray(name: string): bool {
//     if (this.firstArrayPush) {
//       this.firstArrayPush = false;
//       return true;
//     }
//     assert(name == null || name.length == 0, "name should be null.");
//     if (isArrayLike<T>()) {
//       this.value.push(decode<T>(this.buffer, this.state));
//       return false;
//     }
//     return super.pushArray(name);
//   }
// }
//@ts-ignore
@inline
function getStr(val: Value, name: String): string {
  assert(val instanceof Str, "Value with Key: "+ name +" is not a string or null");
  return (<Str>val)._str;
  
  
}

function decodeArray<T>(val: Value, name: string): Array<T> {
  assert(val instanceof Arr, "Value with Key: " + name + " is not an array or null.");
  let res = new Array<T>();
  let arr = (<Arr>val)._arr;
  for (let i: i32 = 0; i < arr.length; i++){
    let item: T = decode<T>(arr[i]);
    res.push(item);
  }
  return res;
}


//@ts-ignore
@global
function decode<T>(buffer: Value, name: string = ""): T {
  let val: Value;
  if (buffer instanceof Obj){
    const obj: Obj = (buffer instanceof Uint8Array) ? JSON.parse(buffer) : <Obj>buffer;
    let res = obj.get(name);
    if (res == null){
      throw new Error("Key: " + name + " not found");
    }
    val = res;
  }else {
    val = <Value> buffer;
  }
  if (val instanceof Null) {
    assert(isNullable<T>() || isString<T>(), "Key: " + name + " with type " + nameof<T>() + "is not nullable.");
    //@ts-ignore
    return <T>null;
  }
  if (isString<T>()) {
    //@ts-ignore
    return getStr(val, name);
  }
  if (isBoolean<T>()) {
    assert(val instanceof Bools, "Value with Key: "+ name +" is not a string");
    //@ts-ignore
    return (<Bools>val)._bool
  }
  var value: T;
  if (isInteger<T>()) {
    //@ts-ignore
    if (value instanceof u64 || value instanceof i64) {
      assert(val instanceof Str, "Value with Key: "+ name +" is an 64-bit integer and is expected to be encoded as a string");
      let str = (<Str>val)._str;
      //@ts-ignore
      return <T>(val instanceof u64) ? U64.parseInt(str) : I64.parseInt(str);
    }
    assert(val instanceof Num, "Value with Key: "+ name +" is not an Integer");
    //@ts-ignore
    return <T>(<Num>val)._num;
  }
  assert(isReference<T>(), "type must be an integer, boolean, string, object, or array");
  if (isArrayLike<T>()) {
    //@ts-ignore
    if (value instanceof Uint8Array || value instanceof u128) {
      let s = getStr(val, name);
      //@ts-ignore
      return value instanceof Uint8Array ? base64.decode(s) : u128.fromString(s);
    }
    //@ts-ignore
    assert(value instanceof Arr, "Value with Key: " + name + " is expected to be an array")
    //@ts-ignore only checking the instance
    return <T>decodeArray<valueof<T>>(buffer, name);
  }
  assert(val instanceof Obj, "Value with Key: " + name + " is not an object or null")
  value = instantiate<T>();
  //@ts-ignore
  return value.decode(<Obj>val);
}
