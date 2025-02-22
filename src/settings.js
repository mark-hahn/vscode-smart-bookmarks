'use strict';
/**
 * @author github.com/mark-hahn
 *  
 *
 * */
/** imports */
const vscode = require('vscode');

function extensionConfig() {
    return vscode.workspace.getConfiguration('smart-bookmarks');
}

module.exports = { extensionConfig };
