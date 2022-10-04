import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import getDessertsService from "../Service/dessertService";
import {INewDesserts} from "../interfaces/Desserts"

interface IinitialState{
    desserts: INewDesserts[];
    success: boolean;
    error: boolean;
    loading: boolean
}

const initialState: IinitialState = {
    desserts: [],
    success: false,
    error:false,
    loading:false
}

export const getAllDesserts = createAsyncThunk<INewDesserts[]>( "dessert/getDesserts", async ()=>{
    const dessertsData = await getDessertsService()

    return dessertsData;
})

export const dessertSlice= createSlice({
  name: 'dessert',
  initialState,
  reducers: {
        reset: (state)=>{
            state.desserts = []
            state.success = false
            state.error=false
            state.loading=false
        }
  },
  extraReducers: (builder) =>{
    builder
        .addCase(getAllDesserts.pending, (state)=>{
            state.loading = true
        })
        .addCase(getAllDesserts.fulfilled, (state,action: PayloadAction<INewDesserts[]>)=>{
            state.loading=false
            state.error=false
            state.success=true
            state.desserts= action.payload
        })
        .addCase(getAllDesserts.rejected, (state)=>{
            state.loading=false
            state.success = false
        })
  }
})

export const {reset} = dessertSlice.actions
export default dessertSlice.reducer