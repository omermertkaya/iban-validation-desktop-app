const electron = require("electron");

const { app, BrowserWindow } = electron;



app.on("ready", () => {

  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 800,
    icon: __dirname + '/iban_kontrol.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});