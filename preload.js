const {contextBridge} = require('electron');

contextBridge.exposeInMainWorld('BURRITO', {
  getNodeVer: () => process.versions.node,
  getChromeVer: () => process.versions.chrome,
  getElectronVer: () => process.versions.electron
});