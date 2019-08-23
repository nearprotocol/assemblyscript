import { u128 } from "bignum";

class SerializableU128 extends u128 {


  serialize(): string {
    return this.toString();
  }

  static decode(buffer: Uint8Array): u128 {
      return this.fromString(String.UTF8.decode(buffer.buffer));
  }
}
export { SerializableU128 as u128 }
