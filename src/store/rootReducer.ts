import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import transfersReducer from "./slices/transfersSlice"

const rootReducer = combineReducers({
    transfers: transfersReducer
})

export const persistedReducer = persistReducer({
    key: 'users',
    storage
}, rootReducer)
