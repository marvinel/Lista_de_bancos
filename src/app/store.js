import {configureStore} from '@reduxjs/toolkit'
import banksReducer from '../features/banks/banksSlice'

export default configureStore({
    reducer: {
        banks: banksReducer
    }
})