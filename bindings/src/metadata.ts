import { ClassDeclaration, FieldDeclaration, FunctionDeclaration } from "../../src/ast";
import { isField, toString } from "./utils";

export const METADATA_VERSION = "1.0";

export class FunctionMetadata {
    name: string;
    parameters: {[key: string]: string}[];
    returnType: string;
    stateMutability: boolean;
}

export class ClassMetadata {
    name: string;
    fields: {[key: string]: string};
}

export class ContractMetadata {
    functions: FunctionMetadata[];
    classes: ClassMetadata[];
    description: {[key: string]: string};
    version: string;
}

export function generateFunctionMetadata(func: FunctionDeclaration): FunctionMetadata {
    let name = toString(func.name);
    let signature = func.signature;
    let parameters = signature.parameters.map(param => {
        let name = toString(param.name);
        let type = toString(param.type);
        return {"name": name, "type": type};
    });
    let returnType = toString(signature.returnType);
    let stateMutability = func.decorators ? func.decorators!.findIndex(node => toString(node) == "view") != -1 : false;
    return {name, parameters, returnType, stateMutability};
}

export function generateClassMetadata(node: ClassDeclaration): ClassMetadata {
    let fields: {[key: string]: string} = {};
    for (let member of node.members) {
        if (isField(member)) {
            let name = toString(member.name);
            fields[name] = toString((<FieldDeclaration>member).type!);
        }
    }
    let className = toString(node.name);
    return {name: className, fields};
}
