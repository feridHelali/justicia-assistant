

import  { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  fetchAffairs: () => ipcRenderer.invoke('fetch-affairs'),

});