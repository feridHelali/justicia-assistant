import path from 'path';
import 'reflect-metadata';
import { app, BrowserWindow, Menu, MenuItemConstructorOptions } from 'electron';


import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const startUrl = process.env.ELECTRON_START_URL || 'http://localhost:5173';

  mainWindow.loadURL(startUrl);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    app.quit();
  });


};

app.on('ready', async () => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'الملف',
      submenu: [
        { label: 'فتح الملف' },
        { label: 'حفظ الملف' },
        { type: 'separator' },
        { label: 'خروج', role: 'quit' }
      ]
    },
    // Add more menu items as needed
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  try {
   

    createWindow();
  } catch (err) {
    console.error('Error during app initialization:', err);
  }
});



app.whenReady().then(() => {
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
