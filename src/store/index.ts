// https://redux-toolkit.js.org/tutorials/quick-start

import { themeReducer } from '@/store/slices';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  /**
   * @see https://github.com/rt2zz/redux-persist#storage-engines
   * @see https://stackoverflow.com/q/66156454/18459116
   */
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/**
 * Use this instead of plain useDispatch for better TypeScript support.
 * @see https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Use this instead of useSelector for better TypeScript support.
 * @see https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

// https://redux-toolkit.js.org/rtk-query/api/setupListeners
// setupListeners(store.dispatch);

export default store;
