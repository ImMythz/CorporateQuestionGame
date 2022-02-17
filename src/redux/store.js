import { configureStore } from '@reduxjs/toolkit'
import Question1Reducer from './question1'

export default configureStore({
  reducer: { 
    question1: Question1Reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch