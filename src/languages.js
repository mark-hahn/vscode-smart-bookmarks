const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const defaultLanguages = ['c-style'];

class Languages {  
  constructor(context) { 
    this.context = context; 
    this.languages = {};
    this.fnameFromSfxCache = {};
  }

  notifyError(err, fname) {
    const msg = `Sticky Bookmark Error: ${err} in ${fname}`;
    console.error(msg);
    // notify msg  -- todo
  }

  async loadLanguages() {
    const storageUri  = this.context.globalStorageUri;
    const storagePath = storageUri.path;
    fs.createDirectory(vscode.Uri.file(storagePath));

    for(const language of defaultLanguages) {
      const fileName        = `${language}-language.js`;
      const localFileName   = `./data/${fileName}`;
      const languageData    = require(localFileName).languageData;
      const languageUriPath = path.join(storagePath, fileName);
      const languageUri     = vscode.Uri.file(languageUriPath)
      try { await fs.stat(languageUri) }
      catch(e) {
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
      let languageData;
      try {
        languageData = 
           JSON.parse((await fs.readFile(uri)).toString());
      }
      catch(e) {
        this.notifyError('parsing', fileName);
        continue;
      } 
      if(!languageData.token) {
        this.notifyError('token missing', fileName);
        continue;
      }
      if(!languageData.suffixes) {
        this.notifyError('suffixes missing', fileName);
        continue;
      }
      if(!languageData.keywords) {
        this.notifyError('keywords missing', fileName);
        continue;
      }
      this.languages[fileName] = languageData;
      console.log({fileName, languageData});
    }
  }

  getLanguageFromSfx (sfx) {
    let language = null;
    let filename = this.fnameFromSfxCache(sfx);
    if(filename) 
      language = this.languages[filename];
    else {
      for(const [fname, lang] 
            of Object.entries(this.languages)) {
        if(lang.suffixes.includes(sfx)) {
          filename = fname;
          language = lang;
        }
      }
      if(filename)
          this.fnameFromSfxCache(sfx) = filename;
    }
    return language;
  }

  getToken(sfx) {
    const language = this.getLanguageFromSfx(sfx);
    return language.token;
  }
  
  isKeyword(sfx, word) {
    const language = this.getLanguageFromSfx(sfx);
    if(!language) return false;
    return language.keywords.includes(word);
  }

}

module.exports = {Languages};
