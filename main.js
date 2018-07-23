const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

var Datastore = require('nedb');  
var atividades = new Datastore({ filename: 'atividades.db', autoload: true });  

let mainWindow
let sobre = null;
let login = null;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null
  });
};

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

ipcMain.on('abrir-sobre', () => {
  if(sobre == null){
    sobre = new BrowserWindow({width: 300, height: 235, alwaysOnTop: true, resizable: false});
    sobre.setMenu(null);

    sobre.on('closed', () => {
      sobre = null;
    });
  }

  sobre.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('abrir-login', () => {
  if(login == null){
    login = new BrowserWindow({width: 500, height: 370, alwaysOnTop: true, resizable: false});
    login.setMenu(null);

    login.on('closed', () => {
      login = null;
    });
  }

  login.loadURL(`file://${__dirname}/app/login.html`);
});

ipcMain.on('atividade-parada', (event, atividade, tempoAtividade) => {
  console.log(atividade);
  console.log(tempoAtividade);
});