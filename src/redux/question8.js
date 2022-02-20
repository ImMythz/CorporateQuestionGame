import { createSlice } from '@reduxjs/toolkit';

export const Question8Reducer = createSlice({
    name: 'question8',
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
export const { setAnswer, setColor, clearTile } = Question8Reducer.actions;
// The second argument is an object that describes the reducers
export default Question8Reducer.reducer;