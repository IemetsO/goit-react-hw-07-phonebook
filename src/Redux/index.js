import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import reducer from "./reducer";
import { FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER } from "redux-persist";



const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH,  REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER]
        }
    })
]


const store = configureStore({
    reducer: {
        contacts: reducer
    },
    middleware,
    devTools: true
});

// const persistor = persistStore(store);

// const storeP ={store, persistor}

export default store; 



