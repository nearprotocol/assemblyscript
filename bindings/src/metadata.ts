import {
    ClassDeclaration,
    FieldDeclaration,
    FunctionDeclaration,
    TypeNode,
    NodeKind,
    NamedTypeNode
} from "../../src/ast";
import { isField, toString } from "./utils";

export const METADATA_VERSION = "1.0";

export class FunctionMetadata {
    name: string;
    parameters: {[key: string]: string}[];
    returnType: string;
    stateMutability: string;
}

export class ClassMetadata {
    name: string;
    fields: {[key: string]: string}[];
}

export class ContractMetadata {
    functions: FunctionMetadata[];
    classes: ClassMetadata[];
    contract: {[key: string]: string};
    version: string;
}

export function generateFunctionMetadata(func: FunctionDeclaration): FunctionMetadata {
    let name = toString(func.name);
    let signature = func.signature;
    let parameters = signature.parameters.map(param => {
        let name = toString(param.name);
        let type = convertType(param.type);
        return {"name": name, "type": type};
    });
    let returnType = convertType(signature.returnType);
    let isView = func.decorators ? func.decorators!.findIndex(node => toString(node) == "view") != -1 : false;
    let stateMutability = isView ? "view" : "change";
    return {name, parameters, returnType, stateMutability};
}

export function generateClassMetadata(node: ClassDeclaration): ClassMetadata {
    let fields: {[key: string]: string}[] = [];
    for (let member of node.members) {
        if (isField(member)) {
            let name = toString(member.name);
            let type = convertType((<FieldDeclaration>member).type!);
            fields.push({"name": name, "type": type});
        }
    }
    let className = toString(node.name);
    return {name: className, fields};
}

function convertType(type: TypeNode): string {
    switch (type.kind) {
        case NodeKind.NAMEDTYPE: {
            let res = [];
            if (type.isNullable) {
                res.push("Option<");
            }
            let node = <NamedTypeNode>type;
            let typeName = toString(node.name);
            switch (typeName) {
                case "boolean": {
                    typeName = "bool";
                    break;
                }
                case "Array":
                case "Iterator":
                case "Set": {
                    typeName = "Seq";
                    break;
                }
                case "Uint8Array": {
                    typeName = "[u8]";
                    break;
                }
                case "Uint16Array": {
                    typeName = "[u16]";
                    break;
                }
                case "Uint32Array": {
                    typeName = "[u32]";
                    break;
                }
                case "Uint64Array": {
                    typeName = "[u64]";
                    break;
                }
                case "Int8Array": {
                    typeName = "[i8]";
                    break;
                }
                case "Int16Array": {
                    typeName = "[i16]";
                    break;
                }
                case "Int32Array": {
                    typeName = "[i32]";
                    break;
                }
                case "Int64Array": {
                    typeName = "[i64]";
                    break;
                }
                default: break;
            }
            res.push(typeName);
            let typeArguments = node.typeArguments;
            if (typeArguments) {
                let numArguments = typeArguments.length;
                if (numArguments) {
                    res.push("<");
                    res.push(convertType(typeArguments[0]));

                    for (let i = 1; i < numArguments; i++) {
                        res.push(",");
                        res.push(convertType(typeArguments[i]));
                    }
                    res.push(">");
                }
            }
            if (type.isNullable) {
                res.push(">");
            }
            return res.join("");
        }
        case NodeKind.FUNCTIONTYPE: {
            return "functionType";
        }
        default: throw new Error("Unexpected type kind");
    }
}
