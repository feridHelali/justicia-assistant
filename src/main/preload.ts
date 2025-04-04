
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    fetchAffairs: () => ipcRenderer.invoke('fetch-affairs'),
    fetchAffairById: (id: number) => ipcRenderer.invoke('fetch-affair-by-id', id),
    createAffair: (affair: any) => ipcRenderer.invoke('create-affair', affair),
    updateAffair: (affair: any) => ipcRenderer.invoke('update-affair', affair),
    deleteAffair: (id: number) => ipcRenderer.invoke('delete-affair', id),
    fetchArticles: () => ipcRenderer.invoke('fetch-articles'),
    fetchArticleById: (id: number) => ipcRenderer.invoke('fetch-article-by-id', id),
    createArticle: (article: any) => ipcRenderer.invoke('create-article', article),
    updateArticle: (article: any) => ipcRenderer.invoke('update-article', article),
    deleteArticle: (id: number) => ipcRenderer.invoke('delete-article', id),
});
