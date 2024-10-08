// store.ts
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    affairs: null,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;