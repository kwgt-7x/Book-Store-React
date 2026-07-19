import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/getCategoriesApi/getCategoriesApiSlice'
import booksReducer from '../features/getBooksApi/getBooksApiSlice'
import sliderReducer from '../features/getAllSliderHero/getSlidersHeroSlice'
import authersReducer from '../features/getAuthers/getAuthersSlice'
import allBooksReducer from '../features/getAllBooksApi/getAllBooksApiSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        books: booksReducer,
        siders: sliderReducer,
        auther: authersReducer,
        allBooks: allBooksReducer
    },
})