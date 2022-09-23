import {configureStore} from "@reduxjs/toolkit"
import dessertReducer from "./Slice/dessertSlice"


export const store = configureStore({
    reducer:{
        dessert: dessertReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch