import { DeclarationStatement, Node, NodeKind, Source, SourceKind } from "../../src/ast";
import { ASTBuilder } from "./sourceBuilder";

export function toString(node: Node): string {
    return ASTBuilder.build(node);
}

export function isEntry(source: Source | Node): boolean {
    let _source = <Source>((source.kind == NodeKind.SOURCE) ? source : source.range.source);
    return _source.sourceKind == SourceKind.USER_ENTRY;
}

export function isClass(type: Node): boolean {
    return type.kind == NodeKind.CLASSDECLARATION;
}

export function isField(mem: DeclarationStatement): boolean {
    return mem.kind == NodeKind.FIELDDECLARATION;
}
