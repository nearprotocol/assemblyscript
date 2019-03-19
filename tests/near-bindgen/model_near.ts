
      import { near } from "./near";
      import { JSONEncoder} from "./json/encoder"
      import { JSONDecoder, ThrowingJSONHandler, DecoderState  } from "./json/decoder"
      import {FooBar as wrapped_FooBar, ContainerClass as wrapped_ContainerClass, AnotherContainerClass as wrapped_AnotherContainerClass} from "./model";

      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_ptr: u32): void;
      @external("env", "input_read_len")
      declare function input_read_len(): u32;
      @external("env", "input_read_into")
      declare function input_read_into(ptr: usize): void;
    
export function __near_encode_Array_String(
          value: Array<String>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushObject(null);
          __near_encode_String(<String>value[i], encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }
}
}
export function __near_encode_Array_Array_String(
          value: Array<Array<String>>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushArray(null);
          __near_encode_Array_String(<Array<String>>value[i], encoder);
          encoder.popArray();
        } else {
          encoder.setNull(null);
        }
}
}
export function __near_encode_Array_u32(
          value: Array<u32>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
encoder.setInteger(null, value[i]);
}
}
export function __near_encode_Array_i32(
          value: Array<i32>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
encoder.setInteger(null, value[i]);
}
}
export function __near_encode_FooBar(
          value: wrapped_FooBar,
          encoder: JSONEncoder): void {
encoder.setInteger("foo", value.foo);
encoder.setInteger("bar", value.bar);
encoder.setString("u64Val", value.u64Val.toString());
encoder.setString("i64Val", value.i64Val.toString());
encoder.setBoolean("flag", value.flag);
if (value.baz != null) {
          encoder.pushObject("baz");
          __near_encode_String(<String>value.baz, encoder);
          encoder.popObject();
        } else {
          encoder.setNull("baz");
        }
if (value.arr != null) {
          encoder.pushArray("arr");
          __near_encode_Array_Array_String(<Array<Array<String>>>value.arr, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("arr");
        }
if (value.u32Arr != null) {
          encoder.pushArray("u32Arr");
          __near_encode_Array_u32(<Array<u32>>value.u32Arr, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("u32Arr");
        }
if (value.i32Arr != null) {
          encoder.pushArray("i32Arr");
          __near_encode_Array_i32(<Array<i32>>value.i32Arr, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("i32Arr");
        }
}
export class __near_JSONHandler_FooBar extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_FooBar>;
      handledRoot: boolean = false;
      value: wrapped_FooBar = new wrapped_FooBar();
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
setString(name: string, value: String): void {
if (name == "u64Val") {
            this.value.u64Val = U64.parseInt(value);
            return;
          }
if (name == "i64Val") {
            this.value.i64Val = I64.parseInt(value);
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
if (name == "foo") {
        this.value.foo = <i32>null;
        return;
      }
if (name == "bar") {
        this.value.bar = <u32>null;
        return;
      }
if (name == "u64Val") {
        this.value.u64Val = <u64>null;
        return;
      }
if (name == "i64Val") {
        this.value.i64Val = <i64>null;
        return;
      }
if (name == "flag") {
        this.value.flag = <bool>null;
        return;
      }
if (name == "baz") {
        this.value.baz = <String>null;
        return;
      }
if (name == "arr") {
        this.value.arr = <Array<Array<String>>>null;
        return;
      }
if (name == "u32Arr") {
        this.value.u32Arr = <Array<u32>>null;
        return;
      }
if (name == "i32Arr") {
        this.value.i32Arr = <Array<i32>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "arr") {
          this.value.arr = <Array<Array<String>>>__near_decode_Array_Array_String(this.buffer, this.decoder.state);
          return false;
        }
if (name == "u32Arr") {
          this.value.u32Arr = <Array<u32>>__near_decode_Array_u32(this.buffer, this.decoder.state);
          return false;
        }
if (name == "i32Arr") {
          this.value.i32Arr = <Array<i32>>__near_decode_Array_i32(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}

export class __near_JSONHandler_Array_Array_String extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_Array_String>;
      handledRoot: boolean = false;
      value: Array<Array<String>> = new Array<Array<String>>();
pushObject(name: string): bool {
        this.value.push(<Array<String>>__near_decode_Array_String(this.buffer, this.decoder.state));
        return false;
      }
      pushArray(name: string): bool {
        assert(name == null);
        if (!this.handledRoot) {
          this.handledRoot = true;
          return true;
        }
        this.value.push(<Array<String>>__near_decode_Array_String(this.buffer, this.decoder.state));
        return false;
      }
}

export class __near_JSONHandler_Array_String extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_String>;
      handledRoot: boolean = false;
      value: Array<String> = new Array<String>();
setString(name: string, value: ~lib/string/String): void {
          this.value.push(<String>value);
        }
setNull(name: string): void {
        this.value.push(<String>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }
}

export function __near_decode_Array_String(
        buffer: Uint8Array, state: DecoderState):Array<String> {
      let handler = new __near_JSONHandler_Array_String();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_String>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_decode_Array_Array_String(
        buffer: Uint8Array, state: DecoderState):Array<Array<String>> {
      let handler = new __near_JSONHandler_Array_Array_String();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_Array_String>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export class __near_JSONHandler_Array_u32 extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_u32>;
      handledRoot: boolean = false;
      value: Array<u32> = new Array<u32>();
setInteger(name: string, value: i64): void {
          this.value.push(<u32>value);
        }
setNull(name: string): void {
        this.value.push(<u32>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }
}

export function __near_decode_Array_u32(
        buffer: Uint8Array, state: DecoderState):Array<u32> {
      let handler = new __near_JSONHandler_Array_u32();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_u32>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export class __near_JSONHandler_Array_i32 extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_i32>;
      handledRoot: boolean = false;
      value: Array<i32> = new Array<i32>();
setInteger(name: string, value: i64): void {
          this.value.push(<i32>value);
        }
setNull(name: string): void {
        this.value.push(<i32>null);
      }
      pushArray(name: string): bool {
        assert(name == null && !this.handledRoot);
        this.handledRoot = true;
        return true;
      }
}

export function __near_decode_Array_i32(
        buffer: Uint8Array, state: DecoderState):Array<i32> {
      let handler = new __near_JSONHandler_Array_i32();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_i32>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_decode_FooBar(
        buffer: Uint8Array, state: DecoderState):wrapped_FooBar {
      let handler = new __near_JSONHandler_FooBar();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_FooBar>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_encode_ContainerClass(
          value: wrapped_ContainerClass,
          encoder: JSONEncoder): void {
if (value.foobar != null) {
          encoder.pushObject("foobar");
          __near_encode_FooBar(<FooBar>value.foobar, encoder);
          encoder.popObject();
        } else {
          encoder.setNull("foobar");
        }
}
export class __near_JSONHandler_ContainerClass extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_ContainerClass>;
      handledRoot: boolean = false;
      value: wrapped_ContainerClass = new wrapped_ContainerClass();
setNull(name: string): void {
if (name == "foobar") {
        this.value.foobar = <wrapped_FooBar>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }
if (name == "foobar") {
          this.value.foobar = <FooBar>__near_decode_FooBar(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}

export function __near_decode_ContainerClass(
        buffer: Uint8Array, state: DecoderState):wrapped_ContainerClass {
      let handler = new __near_JSONHandler_ContainerClass();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_ContainerClass>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_encode_Array_FooBar(
          value: Array<wrapped_FooBar>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushObject(null);
          __near_encode_FooBar(<FooBar>value[i], encoder);
          encoder.popObject();
        } else {
          encoder.setNull(null);
        }
}
}
export function __near_encode_Array_Array_FooBar(
          value: Array<Array<wrapped_FooBar>>,
          encoder: JSONEncoder): void {
for (let i = 0; i < value.length; i++) {
if (value[i] != null) {
          encoder.pushArray(null);
          __near_encode_Array_FooBar(<Array<FooBar>>value[i], encoder);
          encoder.popArray();
        } else {
          encoder.setNull(null);
        }
}
}
export function __near_encode_AnotherContainerClass(
          value: wrapped_AnotherContainerClass,
          encoder: JSONEncoder): void {
if (value.foobars != null) {
          encoder.pushArray("foobars");
          __near_encode_Array_Array_FooBar(<Array<Array<FooBar>>>value.foobars, encoder);
          encoder.popArray();
        } else {
          encoder.setNull("foobars");
        }
}
export class __near_JSONHandler_AnotherContainerClass extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_AnotherContainerClass>;
      handledRoot: boolean = false;
      value: wrapped_AnotherContainerClass = new wrapped_AnotherContainerClass();
setNull(name: string): void {
if (name == "foobars") {
        this.value.foobars = <Array<Array<wrapped_FooBar>>>null;
        return;
      }

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {
if (name == "foobars") {
          this.value.foobars = <Array<Array<FooBar>>>__near_decode_Array_Array_FooBar(this.buffer, this.decoder.state);
          return false;
        }

        return super.pushArray(name);
      }
}

export class __near_JSONHandler_Array_Array_FooBar extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_Array_FooBar>;
      handledRoot: boolean = false;
      value: Array<Array<wrapped_FooBar>> = new Array<Array<wrapped_FooBar>>();
pushObject(name: string): bool {
        this.value.push(<Array<FooBar>>__near_decode_Array_FooBar(this.buffer, this.decoder.state));
        return false;
      }
      pushArray(name: string): bool {
        assert(name == null);
        if (!this.handledRoot) {
          this.handledRoot = true;
          return true;
        }
        this.value.push(<Array<FooBar>>__near_decode_Array_FooBar(this.buffer, this.decoder.state));
        return false;
      }
}

export class __near_JSONHandler_Array_FooBar extends ThrowingJSONHandler {
      buffer: Uint8Array;
      decoder: JSONDecoder<__near_JSONHandler_Array_FooBar>;
      handledRoot: boolean = false;
      value: Array<wrapped_FooBar> = new Array<wrapped_FooBar>();
pushObject(name: string): bool {
        this.value.push(<FooBar>__near_decode_FooBar(this.buffer, this.decoder.state));
        return false;
      }
      pushArray(name: string): bool {
        assert(name == null);
        if (!this.handledRoot) {
          this.handledRoot = true;
          return true;
        }
        this.value.push(<FooBar>__near_decode_FooBar(this.buffer, this.decoder.state));
        return false;
      }
}

export function __near_decode_Array_FooBar(
        buffer: Uint8Array, state: DecoderState):Array<wrapped_FooBar> {
      let handler = new __near_JSONHandler_Array_FooBar();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_FooBar>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_decode_Array_Array_FooBar(
        buffer: Uint8Array, state: DecoderState):Array<Array<wrapped_FooBar>> {
      let handler = new __near_JSONHandler_Array_Array_FooBar();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_Array_Array_FooBar>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export function __near_decode_AnotherContainerClass(
        buffer: Uint8Array, state: DecoderState):wrapped_AnotherContainerClass {
      let handler = new __near_JSONHandler_AnotherContainerClass();
      handler.buffer = buffer;
      handler.decoder = new JSONDecoder<__near_JSONHandler_AnotherContainerClass>(handler);
      handler.decoder.deserialize(buffer, state);
      return handler.value;
    }

export class FooBar extends wrapped_FooBar {
        static decode(json: Uint8Array): FooBar {
          return <FooBar>__near_decode_FooBar(json, null);
        }

        encode(): Uint8Array {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_FooBar(<FooBar>this, encoder);
          encoder.popObject();
          return encoder.serialize();
        }
      }
export class ContainerClass extends wrapped_ContainerClass {
        static decode(json: Uint8Array): ContainerClass {
          return <ContainerClass>__near_decode_ContainerClass(json, null);
        }

        encode(): Uint8Array {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_ContainerClass(<ContainerClass>this, encoder);
          encoder.popObject();
          return encoder.serialize();
        }
      }
export class AnotherContainerClass extends wrapped_AnotherContainerClass {
        static decode(json: Uint8Array): AnotherContainerClass {
          return <AnotherContainerClass>__near_decode_AnotherContainerClass(json, null);
        }

        encode(): Uint8Array {
          let encoder: JSONEncoder = new JSONEncoder();
          encoder.pushObject(null);
          __near_encode_AnotherContainerClass(<AnotherContainerClass>this, encoder);
          encoder.popObject();
          return encoder.serialize();
        }
      }