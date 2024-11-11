
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    fetchAffairs: () => ipcRenderer.invoke('fetch-affairs'),
    fetchAffairById: (id: number) => ipcRenderer.invoke('fetch-affair-by-id', id),
    createAffair: (affair: any) => ipcRenderer.invoke('create-affair', affair),
    updateAffair: (affair: any) => ipcRenderer.invoke('update-affair', affair),
    deleteAffair: (id: number) => ipcRenderer.invoke('delete-affair', id),
});
