const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const {cStyleSuffixes} = require('./data/c-style-suffixes.js');
const {cStyleKeywords} = require('./data/c-style-keywords.js');

exports.init = async (context) => {
  const globalStorageUriPath = context.globalStorageUri.path;

  fs.createDirectory(
          vscode.Uri.file(globalStorageUriPath));

  const cStyleSuffixesUriPath = 
          path.join(globalStorageUriPath, 'c-style-suffixes.js');
  const cStyleSuffixesUri = 
          vscode.Uri.file(cStyleSuffixesUriPath)
  try { await fs.stat(cStyleSuffixesUri) }
  catch(e) {
    fs.writeFile(cStyleSuffixesUri, 
                  Buffer.from(JSON.stringify(cStyleSuffixes))); }

  const cStyleKeywordsUriPath = 
          path.join(globalStorageUriPath, 'c-style-keywords.js');
  const cStyleKeywordsUri = 
          vscode.Uri.file(cStyleKeywordsUriPath)
  try { await fs.stat(cStyleKeywordsUri) }
  catch(e) {
    fs.writeFile(cStyleKeywordsUri, 
                  Buffer.from(JSON.stringify(cStyleKeywords))); }
}
