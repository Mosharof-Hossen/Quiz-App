import { configureStore } from '@reduxjs/toolkit'
import { quizReducer } from './features/quiz/quizSlice'

export const store = configureStore({
    reducer: {
        quizzes: quizReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch