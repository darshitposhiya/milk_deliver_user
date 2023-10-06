import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import whiteLists from "../features/whiteLists";
import authSlice from "../features/authSlice";

const rootReducer = combineReducers({

    whiteLists,
    auth: authSlice,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['whiteLists'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware: [thunk].concat(commentApi.middleware)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
            // serializableCheck: {
            //   ignoredActions: ["persist/PERSIST"]
            // }
        })
});
