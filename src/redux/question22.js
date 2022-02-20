import { createSlice } from '@reduxjs/toolkit';

export const Question22Reducer = createSlice({
    name: 'question22',
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
export const { setAnswer, setColor, clearTile } = Question22Reducer.actions;

// The second argument is an object that describes the reducers
export default Question22Reducer.reducer;
