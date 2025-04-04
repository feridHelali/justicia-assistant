// global.d.ts
export { };


interface ElectronAPI {
    fetchAffairs: () => Promise<any>;
    fetchAffairById: (id: string) => Promise<any>;
    createAffair: (affair: any) => Promise<any>;
    updateAffair: (affair: any) => Promise<any>;
    deleteAffair: (id: number) => Promise<any>;
    fetchArticles: () => Promise<any>;
    fetchArticleById: (id: string) => Promise<any>;
    createArticle: (article: any) => Promise<any>;
    updateArticle: (article: any) => Promise<any>;
    deleteArticle: (id: number) => Promise<any>;
}
export type MockElectronAPI = {
    fetchAffairs: jest.Mock<Promise<any>, any[]>;
    fetchAffairById: jest.Mock<Promise<any>, [number]>;
    createAffair: jest.Mock<Promise<any>, [any]>;
    updateAffair: jest.Mock<Promise<any>, [any]>;
    deleteAffair: jest.Mock<Promise<any>, [number]>
    fetchArticles: jest.Mock<Promise<any>, any[]>;
    fetchArticleById: jest.Mock<Promise<any>, [number]>;
    createArticle: jest.Mock<Promise<any>, [any]>;
    updateArticle: jest.Mock<Promise<any>, [any]>;
    deleteArticle: jest.Mock<Promise<any>, [number]>
};


declare global {
    interface Window {
        electronAPI: ElectronAPI;
        mockElectronAPI: MockElectronAPI;
    }
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}



