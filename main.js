const {app,BrowserWindow} = require('electron');

app.on('ready',createWindow);

function createWindow(){
    let win = new BrowserWindow({
        width:1500,
        height:1000,
        webPreferences:{
            nodeIntegration:true
        }
    })

    win.loadFile('dist/AnalogClockv2/index.html');
}

