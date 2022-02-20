import { configureStore } from '@reduxjs/toolkit'
import Question1Reducer from './question1'
import Question2Reducer from './question2'
import Question3Reducer from './question3'
import Question4Reducer from './question4'
import Question5Reducer from './question5'
import Question6Reducer from './question6'
import Question7Reducer from './question7'
import Question8Reducer from './question8'
import Question9Reducer from './question9'
import Question10Reducer from './question10'

export default configureStore({
  reducer: { 
    question1: Question1Reducer,
    question2: Question2Reducer,
    question3: Question3Reducer,
    question4: Question4Reducer,
    question5: Question5Reducer,
    question6: Question6Reducer,
    question7: Question7Reducer,
    question8: Question8Reducer,
    question9: Question9Reducer,
    question10: Question10Reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch