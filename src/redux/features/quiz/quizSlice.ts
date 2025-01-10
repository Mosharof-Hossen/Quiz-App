import { quizData } from '@/Home/QuizData';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit'

interface TQuiz {
    question: typeof quizData;
    currentQuestionIndex: number,
    userAnswers: (string | null)[],
    quizComplete: boolean,
}

const initialState: TQuiz = {
    question: quizData,
    currentQuestionIndex: 0,
    userAnswers: Array(quizData.length).fill(null),
    quizComplete: false,

}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { answer, currentQuestionIndex } = action.payload;
            state.userAnswers[currentQuestionIndex] = answer;
        }
    }
})

export const getQuiz = (state: RootState) => {
    return state.quizzes
}

export const { setAnswer } = quizSlice.actions
export const quizReducer = quizSlice.reducer;