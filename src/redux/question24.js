import { createSlice } from '@reduxjs/toolkit';

export const Question24Reducer = createSlice({
    name: 'question24',
    initialState: {
        answer: '',
        color: '',
    },
    reducers: {
        setColor: (state) => {
            state.color = '!bg-blue';
        },
        setAnswer: (state, action) => {
            state.answer = action.payload;
        },
        clearTile: (state) => {
            state.answer = '';
            state.color = '';
        }
    },
});

// The first argument is the name of the actions
export const { setAnswer, setColor, clearTile } = Question24Reducer.actions;

// The second argument is an object that describes the reducers
export default Question24Reducer.reducer;
