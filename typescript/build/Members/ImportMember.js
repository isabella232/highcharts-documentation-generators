"use strict";
/*!*
 *
 *  Copyright (C) Highsoft AS
 *
 * */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const M = __importStar(require("./Member"));
class ImportMember extends M.Member {
    /* *
     *
     *  Functions
     *
     * */
    getBinding() {
        var _a, _b;
        return (_b = (_a = this.node.importClause) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.getText(this.sourceFile);
    }
    getBindings() {
        var _a, _b;
        const sourceFile = this.sourceFile;
        const importClause = this.node.importClause;
        const bindingNodes = (_b = (_a = importClause) === null || _a === void 0 ? void 0 : _a.namedBindings) === null || _b === void 0 ? void 0 : _b.getChildren(sourceFile);
        if (typeof importClause === 'undefined' ||
            typeof bindingNodes === 'undefined') {
            return;
        }
        const bindings = [];
        for (let bindingNode of bindingNodes) {
            bindings.push(bindingNode.getText(sourceFile));
        }
        if (bindings.length === 0) {
            return;
        }
        return bindings;
    }
    toJSON() {
        const sourceFile = this.sourceFile;
        const superJSON = super.toJSON();
        return {
            binding: this.getBinding(),
            bindings: this.getBindings(),
            kind: 'import',
            kindID: superJSON.kindID,
            source: this.node.moduleSpecifier.getText(sourceFile)
        };
    }
}
exports.ImportMember = ImportMember;
exports.default = ImportMember;
