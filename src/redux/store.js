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
import Question11Reducer from './question11'
import Question12Reducer from './question12'
import Question13Reducer from './question13'
import Question14Reducer from './question14'
import Question15Reducer from './question15'
import Question16Reducer from './question16'
import Question17Reducer from './question17'
import Question18Reducer from './question18'
import Question19Reducer from './question19'
import Question20Reducer from './question20'
import Question21Reducer from './question21'
import Question22Reducer from './question22'
import Question23Reducer from './question23'
import Question24Reducer from './question24'

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
    question11: Question11Reducer,
    question12: Question12Reducer,
    question13: Question13Reducer,
    question14: Question14Reducer,
    question15: Question15Reducer,
    question16: Question16Reducer,
    question17: Question17Reducer,
    question18: Question18Reducer,
    question19: Question19Reducer,
    question20: Question20Reducer,
    question21: Question21Reducer,
    question22: Question22Reducer,
    question23: Question23Reducer,
    question24: Question24Reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch