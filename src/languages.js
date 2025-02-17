const vscode = require('vscode');
const fs     = vscode.workspace.fs;
const path   = require("path");

const defaultLanguages = ['c-style'];

class Languages {  
  constructor(context) { 
    this.context   = context; 
    this.globalStorageUriPath = 
          this.context.globalStorageUri.path;
    this.languages = {};
  }

  async loadLanguages() {
    fs.createDirectory(vscode.Uri.file(this.globalStorageUriPath));

    for(const language of defaultLanguages) {
      const fileName      = `${language}-language.js`;
      const localFileName = `./data/${fileName}`;
      this.languages[fileName] = 
              require(localFileName).languageData;
      const languageUriPath = 
              path.join(this.globalStorageUriPath, fileName);
      const languageUri = vscode.Uri.file(languageUriPath)
      try { await fs.stat(languageUri) }
      catch(e) {
        await fs.writeFile(languageUri, Buffer.from(
            JSON.stringify(this.languages[fileName], null, 2))); 
      }
    }

    const files = 
           await fs.readDirectory(this.context.globalStorageUri);
    for(const file of files) {
      const fileName = file[0];
      if(!fileName.endsWith('language.js')) continue;
      const filePath = path.join(this.globalStorageUriPath, fileName);
      const uri      = vscode.Uri.file(filePath);
      try {
        const languageData = 
           JSON.parse((await fs.readFile(uri, 'utf8')).toString());
        this.languages[fileName] = languageData;
        // console.log({fileName, languageData});
      }
      catch(e) {console.error(e)}  // todo use notification
    }
  }
}
module.exports = {Languages};
