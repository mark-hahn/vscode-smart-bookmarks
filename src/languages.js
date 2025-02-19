const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

// markdown marker <!---->
// vscode.window.activeTextEditor textEditor.document TextDocument languageId

class Languages {   
  constructor(context) { 
    this.context = context; 
    this.markerByLanguageid   = {};
    this.caseSensByLanguageid = {};
    this.keywordsByLang = {};
    this.tokensByLang   = {};
  }

  notifyError(err, fname) {
    const msg = `Sticky Bookmark Error: ${err}, ${fname}`;
    console.error(msg);
    vscode.window.showInformationMessage(msg);
  }

  async loadLanguages() {
    const storageUri  = this.context.globalStorageUri;
    const storagePath = storageUri.path;

    await fs.createDirectory(storageUri);
    let files = await fs.readDirectory(storageUri);
    if(files.length == 0) {
      const {languagesById} = require('../default-lang.js');
      for(const [languageId, language] of 
                             Object.entries(languagesById)) {
        const uriPath = path.join(storagePath, 
                                `${languageId}-lang.json`);
        await fs.writeFile(vscode.Uri.file(uriPath), 
                Buffer.from(JSON.stringify(language, null, 2))); 
      }
    }

    files = await fs.readDirectory(storageUri);
    for(const file of files) {
      const fileName = file[0];
      if(!fileName.endsWith('-lang.json')) continue;

      const languageId = fileName.slice(0, -10);
      const filePath = path.join(storagePath, fileName);
      const uri = vscode.Uri.file(filePath);
      let language;
      try { language = 
              JSON.parse((await fs.readFile(uri)).toString())}
      catch(e) {
        this.notifyError('parsing', fileName);
        continue;
      } 
      if(!language.marker) {
        this.notifyError(`marker missing`, fileName);
        continue;
      }
      this.markerByLanguageid[languageId]   = language.marker;
      this.caseSensByLanguageid[languageId] = language.caseSensitive;
      this.keywordsByLang[languageId] = new Set(language.keywords);
      this.tokensByLang[languageId]   = new Set(language.tokens);
    }
  }

  getMarker(languageid) {
    return this.markerByLanguageid[languageid];
  }

  isKeyword(languageid, word) {
    const keywords = this.keywordsByLang[languageid];
    if(!keywords) return false;
    if(!(caseSensByLanguageid[languageid] ?? true))
      word = word.toLowercase();
    return keywords.has(word);
  }

  isToken(languageid, tokenStr) {
    const tokens = this.tokensByLang[languageid];
    if(!tokens) return false;
    if(!caseSensByLanguageid[languageid])
      tokenStr = tokenStr.toLowercase();
    return tokens.has(tokenStr);
  }
  
}

module.exports = {Languages};

/*
['plaintext', 'code-text-binary', 'scminput', 'Log', 'log', 'bat', 'clojure',
 'coffeescript', 'jsonc', 'json', 'c', 'cpp', 'cuda-cpp', 'csharp', 'css',
 'dart', 'diff', 'dockerfile', 'ignore', 'fsharp', 'git-commit', 'git-rebase',
 'go', 'groovy', 'handlebars', 'hlsl', 'html', 'ini', 'properties', 'java',
 'javascriptreact', 'javascript', 'jsx-tags', 'jsonl', 'snippets', 'julia',
 'juliamarkdown', 'tex', 'latex', 'bibtex', 'cpp_embedded_latex',
 'markdown_latex_combined', 'less', 'lua', 'makefile', 'markdown',
 'markdown-math', 'wat', 'objective-c', 'objective-cpp', 'perl', 'raku',
 'php', 'powershell', 'jade', 'python', 'r', 'razor', 
 'restructuredtext', 'ruby', 'rust', 'scss', 'search-result', 
 'shaderlab', 'shellscript', 'sql', 'swift', 'typescript', 
 'typescriptreact', 'vb', 'xml', 'xsl', 'dockercompose', 'yaml', 'csv', 
 'tsv', 'terraform', 'platformio-debug.disassembly', 
 'platformio-debug.memoryview', 'platformio-debug.asm', 'vue']
*/ 