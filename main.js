const { app, BrowserWindow } = require('electron');

// keeping a global reference of the window object, if not, the window will be closed
// automatically when the js object is garbage colelcted
let win;

function createWindow(){
    // creating the browser window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');
}

app.on('ready', createWindow);