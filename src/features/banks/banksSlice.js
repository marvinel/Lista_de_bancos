import { createSlice } from "@reduxjs/toolkit";

export const banksSlice = createSlice({
    name: 'bank',
    initialState: {
        listBanks: []
    },
    reducers: {
        saveBanks: (state, action) => {
            state.listBanks = action.payload
            const bankListJSON = JSON.stringify(action.payload)
            localStorage.setItem('bankList', bankListJSON)
        },

    }
})

export const {saveBanks} = banksSlice.actions
export default banksSlice.reducer