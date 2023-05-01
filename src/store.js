import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist/es/constants';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';
import scrollspyReducer from 'components/scrollspy/scrollspySlice';
import langReducer from 'lang/langSlice';
import menuReducer from 'layout/nav/main-menu/menuSlice';
import settingsReducer from 'settings/settingsSlice';
import notificationReducer from 'layout/nav/notifications/notificationSlice';
import authReducer from 'auth/authSlice';
import layoutReducer from 'layout/layoutSlice';
import { REDUX_PERSIST_KEY } from 'config.js';
import createSagaMiddleware from '@redux-saga/core';
import homesaga from 'redux/saga';
import MainReducer from 'redux/reducer';

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    lang: langReducer,
    auth: authReducer,
    menu: menuReducer,
    notification: notificationReducer,
    scrollspy: scrollspyReducer,
    reduce: MainReducer,
  })
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(homesaga);
const persistedStore = persistStore(store);
export { store, persistedStore };
