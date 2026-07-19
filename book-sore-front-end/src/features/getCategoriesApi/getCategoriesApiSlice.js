import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from '../../api'

const initialState = {
    data: [],
    ispayload: false,
    error: null
}

export const getCategoriesApi = createAsyncThunk('get-Categories', async ({pagesize = 10} = {}) => {
    const { data } = await api.get(`categories?pagination[pageSize]=${pagesize}&populate=*`);

    return data;
})

const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategoriesApi.pending, (state) => {
            state.ispayload = true;
        })

            .addCase(getCategoriesApi.fulfilled, (state, action) => {
                state.data = action.payload.data;
                state.ispayload = false;
            })

            .addCase(getCategoriesApi.rejected, (state, action) => {
                state.ispayload = false;
                state.error = state.error.massage || 'حدث خطأ ما'
            })
    }
});

export default categoriesSlice.reducer;