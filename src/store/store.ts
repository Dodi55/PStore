import { configureStore } from "@reduxjs/toolkit"
import { BurgerReducer } from "./Slices/BurgerSlice";


export const store = configureStore({
    reducer: {
        burger: BurgerReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
