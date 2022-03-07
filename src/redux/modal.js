import { createSlice } from '@reduxjs/toolkit';

export const modalState = createSlice({
    name: 'modalState',
    initialState: {
        test: false,
    },
    reducers: {
        clearTile: (state) => {
            state.test = false;
        },
        setThing: (state, action) => {
            state.test = action.payload;
        }
    },
});

// The first argument is the name of the actions
export const { setThing, clearTile } = modalState.actions;

// The second argument is an object that describes the reducers
export default modalState.reducer;