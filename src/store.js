import { configureStore } from '@reduxjs/toolkit'
import token_slice from './features/token_slice'
import { querySlice } from './features/current_query'
import responseSlice from './features/response'
import { historySlice } from './features/prev_his'

export default configureStore({
  reducer: {
    token:token_slice,
    query:querySlice,
    response:responseSlice,
    history:historySlice,
  },
})