import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './common/statusSlice';
import AffairReducer from './affair/affairSlice';

const store = configureStore({
    reducer: {

        status: statusReducer,
        affairs: AffairReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
