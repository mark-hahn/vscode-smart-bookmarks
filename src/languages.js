const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const defaultLanguages = [
  'c-style',
  'python',
];

class Languages {  
  constructor(context) { 
    this.context = context; 
    this.tokenBySfx    = {};
    this.keywordsBySfx = {};
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
        const localPath = `./data/${fileName}`;
        const languageData = require(localPath).languageData;
        await fs.writeFile(languageUri, 
            Buffer.from(JSON.stringify(languageData, null, 2))); 
      }
    }

    const files = await fs.readDirectory(storageUri);
    for(const file of files) {
      const fileName = file[0];
      if(!fileName.endsWith('language.js')) continue;
      const filePath = path.join(storagePath, fileName);
      const uri = vscode.Uri.file(filePath);
      let language;
      try {
        language = 
           JSON.parse((await fs.readFile(uri)).toString());
      }
      catch(e) {
        this.notifyError('parsing', fileName);
        continue;
      } 
      if(!language.token) {
        this.notifyError('token missing', fileName);
        continue;
      }
      if(!language.suffixes) {
        this.notifyError('suffixes missing', fileName);
        continue;
      }
      if(!language.keywords) {
        this.notifyError('keywords missing', fileName);
        continue;
      }
      for(const sfx of language.suffixes) {
        this.tokenBySfx[sfx]    = language.token;
        this.keywordsBySfx[sfx] = language.keywords;
      }
      console.log({fileName, language});
    }
  }

  getToken(sfx) {
    return this.tokenBySfx[sfx];
  }
  
  isKeyword(sfx, word) {
    const keywords = this.keywordsBySfx[sfx];
    if(!keywords) return false;
    return keywords.includes(word);
  }
}

module.exports = {Languages};
