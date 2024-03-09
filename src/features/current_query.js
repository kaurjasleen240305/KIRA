import { createSlice } from '@reduxjs/toolkit'

export const querySlice = createSlice({
  name: 'query',
  initialState: {
    quest: '',
  },
  reducers: {
    change_quest: (state, action) => {
      state.quest = action.payload
    },
  },
})

export const {change_quest} = createSlice.actions

export default querySlice.reducer