import { api } from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    ispayload: false,
    error: null,
}


export const getAuthers = createAsyncThunk('get-auther', async ({pagesize =10 } = {}) => {
    const { data } = await api.get(`authers?pagination[pageSize]=${pagesize}&populate=*`)

    return data
})


const autherSlice = createSlice({
    name: 'AuthersSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAuthers.pending, (state) => {
            state.ispayload = true;
        })

            .addCase(getAuthers.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.ispayload = false;
            })

            .addCase(getAuthers.rejected, (state, action) => {
                state.ispayload = false;
                state.error = state.error.massage || 'حدث خطأ ما'
            })
    }
});

export default autherSlice.reducer;