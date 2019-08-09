// import { Transform } from "assemblyscript/cli/transform";
import { Parser, ExportsWalker, Program, Node } from "../..";
import { BaseVisitor } from './base';
import { DefaultWriter, Writer } from './visitor';

export abstract class Transformer extends BaseVisitor {

    get program(): Program {
      return this.parser.program;
    }
    constructor(parser: Parser, writer: Writer<Node> = new DefaultWriter<Node>()) {
        super(parser, writer);
    }

}
