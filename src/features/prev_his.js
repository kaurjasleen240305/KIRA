import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'query',
  initialState: [
  ],
  reducers: {
    user_history: (state, action) => {
      state.initialState=action.payload;
    },
  },
})

export const {user_history} = createSlice.actions

export default historySlice.reducer