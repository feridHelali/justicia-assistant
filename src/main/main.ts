import 'reflect-metadata';
import path from 'path';
import { app, BrowserWindow, Menu, MenuItemConstructorOptions, ipcMain } from 'electron';
import initializeDatabase from './db/initializeDatabase';

import installExtension, { REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { AffairService } from './services/AffairService';
import { ArticleService } from './services/ArticleService';



function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const startUrl = process.env.ELECTRON_START_URL || 'http://localhost:9000';

    mainWindow.loadURL(startUrl);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        app.quit();
    });
}

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
        await initializeDatabase();

        const affairService = new AffairService();
        const articleService = new ArticleService();


        // Register IPC handlers only after the data source is initialized



        ipcMain.handle('fetch-affairs', async () => {
            return await affairService.getAllAffairs();
        });

        ipcMain.handle('fetch-affair-by-id', async (event, id) => {
            return await affairService.getAffairById(id);
        });

        ipcMain.handle('create-affair', async (event, affair) => {
            return await affairService.createAffair(affair);
        });

        ipcMain.handle('update-affair', async (event, affair) => {
            return await affairService.updateAffair(affair.affairId, affair);
        });

        ipcMain.handle('delete-affair', async (event, id) => {
            await affairService.deleteAffair(id);
            return id;
        });

        ipcMain.handle('fetch-articles', async () => {
            return await articleService.getAllArticles();
        });

        ipcMain.handle('fetch-article-by-id', async (event, id) => {
            return await articleService.getArticleById(id);
        });

        ipcMain.handle('create-article', async (event, article) => {
            return await articleService.createArticle(article);
        });

        ipcMain.handle('update-article', async (event, article) => {
            return await articleService.updateArticle(article.id, article);
        });

        ipcMain.handle('delete-article', async (event, id) => {
            await articleService.deleteArticle(id);
            return id;
        });


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
