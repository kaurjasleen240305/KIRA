import { createSlice } from '@reduxjs/toolkit'

export const responseSlice = createSlice({
  name: 'response',
  initialState: {
    ans: '',
  },
  reducers: {
    change_response: (state, action) => {
      state.ans = action.payload
    },
  },
})

export const {change_response} = responseSlice.actions

export default responseSlice.reducer