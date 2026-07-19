import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    data: [],
    ispayload: false,
    error: null
};

// ==============================
// Get All Books
// ==============================

export const getAllBooksApi = createAsyncThunk(

    "allBooks/getAllBooks",

    async (_, thunkAPI) => {

        try {

            const { data } = await api.get(

                "books?pagination[page]=1&pagination[pageSize]=500&populate=*"

            );

            return data;

        }

        catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.error?.message ||

                "books?pagination[page]=1&pagination[pageSize]=500&populate=*"

            );

        }

    }

);

const AllBooksSlice = createSlice({

    name: "AllBooksSlice",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            // ==========================
            // Pending
            // ==========================

            .addCase(getAllBooksApi.pending, (state) => {

                state.ispayload = true;

                state.error = null;

            })

            // ==========================
            // Fulfilled
            // ==========================

            .addCase(getAllBooksApi.fulfilled, (state, action) => {

                state.ispayload = false;

                state.data = action.payload.data;

            })

            // ==========================
            // Rejected
            // ==========================

            .addCase(getAllBooksApi.rejected, (state, action) => {

                state.ispayload = false;

                state.error = action.payload || "حدث خطأ ما";

            });

    }

});

export default AllBooksSlice.reducer;