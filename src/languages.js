const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const defaultLanguages = [
    'javascript', 'javascriptreact', 'typescript', 'typescriptreact', 
    'python', 'java', 'c', 'cpp', 'csharp', 'go', 'rust', 'swift', 
    'kotlin', 'coffeescript', 'shellscript', 

    'bat', 'css', 'dart', 
    'julia', 'tex', 'latex', 'bibtex', 
    'less', 'lua', 'makefile', 'markdown', 
    'objective-c', 'objective-cpp',
    'perl', 'raku', 'php', 'powershell', 'jade', 
    'r', 'razor', 'ruby', 'sql', 
    'vb', 'xml', 'xsl', 'yaml', 'vue',
    'csv', 'tsv', 
];

// markdown marker <!---->
// vscode.window.activeTextEditor textEditor.document TextDocument languageId

class Languages {   
  constructor(context) { 
    this.context = context; 
    this.markerByLanguageid   = {};
    this.keywordsByLanguageid = {};
    this.tokensByLanguageid   = {};
  }

  notifyError(err, fname) {
    const msg = `Sticky Bookmark Error: ${err}, ${fname}`;
    console.error(msg);
    // notify msg  -- todo
  }

  async loadLanguages() {
    const storageUri  = this.context.globalStorageUri;
    const storagePath = storageUri.path;
    fs.createDirectory(vscode.Uri.file(storagePath));

    for(const language of defaultLanguages) {
      const fileName  = `${language}-language.js`;
      const languageUriPath = path.join(storagePath, fileName);
      const languageUri = vscode.Uri.file(languageUriPath)
      try { await fs.stat(languageUri) }
      catch(e) {
        const localPath = `../languages/${fileName}`;
        const languageData = require(localPath).languageData;
        await fs.writeFile(languageUri, 
            Buffer.from(JSON.stringify(languageData, null, 2))); 
      }
    }

    const files = await fs.readDirectory(storageUri);
    fileLoop:
    for(const file of files) {
      const fileName = file[0];
      if(!fileName.endsWith('language.js')) continue;
      const filePath = path.join(storagePath, fileName);
      const uri = vscode.Uri.file(filePath);
      let language;
      try { language = 
            JSON.parse((await fs.readFile(uri)).toString())}
      catch(e) {
        this.notifyError('parsing', fileName);
        continue;
      } 
      for(const prop of 
           ['marker', 'suffixes', 'keywords', 'tokens']) {
        if(!language[prop]) {
          this.notifyError(`${prop}  missing`, fileName);
          continue fileLoop;
        }
      }
      for(const languageid of language.suffixes) {
        this.markerByLanguageid[languageid]   = language.marker;
        this.keywordsByLanguageid[languageid] = language.keywords;
        this.tokensByLanguageid[languageid]   = language.tokens;
      }
      
      console.log({fileName, language});
    }
  }

  getMarker(languageid) {
    return this.markerByLanguageid[languageid];
  }

  isKeyword(languageid, word) {
    const keywords = this.keywordsByLanguageid[languageid];
    if(!keywords) return false;
    return keywords.includes(word);
  }

  isToken(languageid, str) {
    const tokens = this.tokensByLanguageid[languageid];
    if(!tokens) return false;
    return tokens.includes(str);
  }
  
}

module.exports = {Languages};

/*
['plaintext', 'code-text-binary', 'scminput', 'Log', 'log', 'bat', 'clojure', 'coffeescript', 'jsonc', 'json', 'c', 'cpp', 'cuda-cpp', 'csharp', 'css', 'dart', 'diff', 'dockerfile', 'ignore', 'fsharp', 'git-commit', 'git-rebase', 'go', 'groovy', 'handlebars', 'hlsl', 'html', 'ini', 'properties', 'java', 'javascriptreact', 'javascript', 'jsx-tags', 'jsonl', 'snippets', 'julia', 'juliamarkdown', 'tex', 'latex', 'bibtex', 'cpp_embedded_latex', 'markdown_latex_combined', 'less', 'lua', 'makefile', 'markdown', 'markdown-math', 'wat', 'objective-c', 'objective-cpp', 'perl', 'raku', 'php', 'powershell', 'jade', 'python', 'r', 'razor', 'restructuredtext', 'ruby', 'rust', 'scss', 'search-result', 'shaderlab', 'shellscript', 'sql', 'swift', 'typescript', 'typescriptreact', 'vb', 'xml', 'xsl', 'dockercompose', 'yaml', 'csv', 'tsv', 'terraform', 'platformio-debug.disassembly', 'platformio-debug.memoryview', 'platformio-debug.asm', 'vue']
*/