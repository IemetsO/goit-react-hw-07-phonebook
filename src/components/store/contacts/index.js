import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"

const contactsPersistConfig = {
    key: "items",
    storage,
    blacklist: ["filter"],
}

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,  REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER]
        }
    })
]


const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, reducer)
    },
    middleware,
    devTools: true
});

const persistor = persistStore(store);

const storeP ={store, persistor}

export default storeP; 



