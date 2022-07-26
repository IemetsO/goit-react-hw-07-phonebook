import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer";

export const store =configureStore({
    reducer:{
        contacts: reducer,
    },
    devTools: true
});



export default store 



