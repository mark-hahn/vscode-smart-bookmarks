'use strict';
/**
 * @author github.com/mark-hahn
 *  
 *
 * */
/** imports */
const vscode = require('vscode');

function extensionConfig() {
    return vscode.workspace.getConfiguration('sticky-bookmarks');
}

module.exports = { extensionConfig };
