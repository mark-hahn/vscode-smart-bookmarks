const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const defaultLanguages = [
    "javascript", "typescript", "python", "java", 
    "c", "cpp", "c-sharp", "go", "rust", "swift", 
    "kotlin", "coffeescript", "bash",
];

class Languages {  
  constructor(context) { 
    this.context = context; 
    this.markerBySfx   = {};
    this.keywordsBySfx = {};
    this.tokensBySfx   = {};
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
      for(const sfx of language.suffixes) {
        this.markerBySfx[sfx]   = language.marker;
        this.keywordsBySfx[sfx] = language.keywords;
        this.tokensBySfx[sfx]   = language.tokens;
      }
      
      console.log({fileName, language});
    }
  }

  getMarker(sfx) {
    return this.markerBySfx[sfx];
  }
 isKeyword(sfx, word) {
    const keywords = this.keywordsBySfx[sfx];
    if(!keywords) return false;
    return keywords.includes(word);
  }

  isToken(sfx, str) {
    const tokens = this.tokensBySfx[sfx];
    if(!tokens) return false;
    return tokens.includes(str);
  }
  
}

module.exports = {Languages};
