import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isOpen: boolean,
    headerHeight: number | string,
    categoryHeight: number | string,
    selectCatalogid: number
}

const initialState: InitialState = {
    isOpen: false,
    headerHeight: 0,
    categoryHeight: 0,
    selectCatalogid: 1,
}

export const BurgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        OpenCloseBurger(state) {
            state.isOpen = !state.isOpen
        },
        setHeaderHeight(state, {payload}) {            
            state.headerHeight = payload
        },
        setCategoryHeight(state, {payload}) {            
            state.categoryHeight = payload
        },
        setSelectId(state, {payload}) {            
            state.selectCatalogid = payload
        }
    }
})

export const {actions: {OpenCloseBurger, setHeaderHeight, setCategoryHeight, setSelectId}, reducer: BurgerReducer} = BurgerSlice