import { createSlice } from "@reduxjs/toolkit";


const name = createSlice({
    name: 'NameTrainer',
    initialState: '',
    reducers: {
        setNametrainer: (state, action) => action.payload 
    }
})

export const {setNametrainer} = name.actions
export default name.reducer;