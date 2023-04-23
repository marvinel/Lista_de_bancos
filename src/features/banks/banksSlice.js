import { createSlice } from "@reduxjs/toolkit";

export const banksSlice = createSlice({
    name: 'bank',
    initialState: {
        listBanks: [],
        value: 0
    },
    reducers: {
        saveBanks: (state, action) => {
            state.listBanks = action.payload
        },
        increment: (state) =>{
            state.value += 1
        }
    }
})

export const {saveBanks, increment} = banksSlice.actions
export default banksSlice.reducer