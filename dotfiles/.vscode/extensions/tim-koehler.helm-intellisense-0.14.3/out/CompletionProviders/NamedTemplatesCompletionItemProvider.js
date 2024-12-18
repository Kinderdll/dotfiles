"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedTemplatesCompletionItemProvider = void 0;
const vscode = require("vscode");
const utils = require("../utils");
class NamedTemplatesCompletionItemProvider {
    /**
     * Generates a list of completion items based on the current position in the
     * document.
     */
    provideCompletionItems(document, position, token, context) {
        const currentLine = document.lineAt(position).text;
        if (!utils.isInsideBrackets(currentLine, position.character)) {
            return undefined;
        }
        if (!((currentLine.includes('include')) || currentLine.includes('template'))) {
            return undefined;
        }
        const currentString = utils.getWordAt(currentLine, position.character - 1).trim();
        if (currentString.startsWith('"')) {
            const namedTemplates = utils.getAllNamedTemplatesFromFiles(document.fileName);
            return this.getCompletionItemList(namedTemplates);
        }
        return undefined;
    }
    /**
     * Generates a list of possible completions for the current template prefix.
     */
    getCompletionItemList(namedTemplates) {
        const listOfCompletionItems = [];
        for (const namedTemplate of namedTemplates) {
            const item = new vscode.CompletionItem(namedTemplate, vscode.CompletionItemKind.Field);
            item.insertText = namedTemplate;
            listOfCompletionItems.push(item);
        }
        return listOfCompletionItems;
    }
}
exports.NamedTemplatesCompletionItemProvider = NamedTemplatesCompletionItemProvider;
//# sourceMappingURL=NamedTemplatesCompletionItemProvider.js.map