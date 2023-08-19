import { configureStore, createSlice } from "@reduxjs/toolkit";

const pageSlice=createSlice({
    name:"pageSlice",
    initialState:{
        pageId:0
    },
    reducers:{
        switchPage(state, action){
            state.pageId=action.payload
        }
    }
})

export const pageActions=pageSlice.actions;
export const store =configureStore({
    reducer:{
        pageSlice:pageSlice.reducer,
    }
})