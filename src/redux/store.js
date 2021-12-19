import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/gameSlice'

export default configureStore({
    reducer: {
        gameCounter: counterReducer
    },
})