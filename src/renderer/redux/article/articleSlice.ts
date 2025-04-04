// store/articleSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface ArticleState {
    articles: any[];
    currentArticle: any | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    mode: 'create' | 'update';
}

const initialState: ArticleState = {
    articles: [],
    currentArticle: null,
    status: 'idle',
    error: null,
    mode: 'create',
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
    return await window.electronAPI.fetchArticles();
});

export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (id: string) => {
    return await window.electronAPI.fetchArticleById(id);
});

export const createArticle = createAsyncThunk('articles/createArticle', async (article: any) => {
    return await window.electronAPI.createArticle(article);
});

export const updateArticle = createAsyncThunk('articles/updateArticle', async (article: any) => {
    return await window.electronAPI.updateArticle(article);
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id: number) => {
    return await window.electronAPI.deleteArticle(id);
});

const articleslice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        switchToCreateMode: (state) => {
            state.mode = 'create';
        },
        switchToUpdateMode: (state) => {
            state.mode = 'update';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(createArticle.fulfilled, (state, action: PayloadAction<any>) => {
                state.articles.push(action.payload);
                state.status = 'succeeded';
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<any>) => {
                state.currentArticle = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            })
            .addCase(fetchArticleById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateArticle.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded';
                state.currentArticle = action.payload;
            })
            .addCase(deleteArticle.fulfilled, (state, action: PayloadAction<number>) => {
                state.articles = state.articles.filter((article) => article.id !== action.payload);
                state.status = 'succeeded';
            });
    },
});

export default articleslice.reducer;
export const { switchToCreateMode, switchToUpdateMode } = articleslice.actions;
