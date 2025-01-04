const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadFile('App.tsx'); 
});
