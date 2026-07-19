import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    data: [],
    ispayload: false,
    error: null,
}

export const getAllSliders = createAsyncThunk('get-siders', async () => {
    const { data } = await api.get('sliders?populate=*')

    return data
})

const slidersSlice = createSlice({
    name: 'categoriesSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllSliders.pending, (state) => {
            state.ispayload = true;
        })

            .addCase(getAllSliders.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.ispayload = false;
            })

            .addCase(getAllSliders.rejected, (state, action) => {
                state.ispayload = false;
                state.error = state.error.massage || 'حدث خطأ ما'
            })
    }
});

export default slidersSlice.reducer;