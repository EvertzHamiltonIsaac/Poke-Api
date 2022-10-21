import { configureStore } from "@reduxjs/toolkit";
import NameTrainer from './slices/nameTrainer'

export default configureStore({
    reducer: {
        NameTrainer
    }
})