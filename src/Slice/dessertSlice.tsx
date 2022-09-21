import { createAsyncThunk, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { IDesserts } from "../interfaces/Desserts";
import getDessertsService from "../Service/dessertService";

const initialState= {
    desserts: [],
    success: false,
    error:false,
    loading:false
}

const getAllDesserts = createAsyncThunk( "desserts/getDesserts", async ()=>{
    const dessertsData = await getDessertsService()

    return dessertsData;
})

export const dessertSlice= createSlice({
  name: 'desserts',
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
        .addCase(getAllDesserts.fulfilled, (state,action)=>{
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