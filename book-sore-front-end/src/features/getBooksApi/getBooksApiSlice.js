import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    data: [],
    ispayload: false,
    error: null,
    meta: null
};

export const getBooksApi = createAsyncThunk(

    "get-Books",

    async ({ page = 1, pageSize = 8 } = {}) => {

        const { data } = await api.get(

            `books?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`

        );

        return data;

    }

);

const BooksSlice = createSlice({

    name: "BooksSlice",

    initialState,

    extraReducers: (builder) => {

        builder

            // Books Page
            .addCase(getBooksApi.pending, (state) => {

                state.ispayload = true;
                state.error = null;

            })

            .addCase(getBooksApi.fulfilled, (state, action) => {

                state.data = action.payload.data;
                state.meta = action.payload.meta;
                state.ispayload = false;

            })

            .addCase(getBooksApi.rejected, (state, action) => {

                state.ispayload = false;
                state.error = action.error.message || "حدث خطأ ما";

            })

    }

});

export default BooksSlice.reducer;