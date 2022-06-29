import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TypeDuration = 'Yesterday' | 'Today' | 'Last Hour' | 'Last 3 Days';

type TabState = {
  tab: TypeDuration
  error: string
}

export enum TabEnum {
  LASTHOUR = "errors_last_hour",
  TODAY = "errors_today",
  YESTERDAY = "errors_yesterday",
  LAST3DAYS = "errors_last_3days",
}


const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    tab: 'Yesterday',
    error: TabEnum.YESTERDAY
  } as TabState,
  reducers: {
    setTab: (state: TabState, action: PayloadAction<{ tab: TypeDuration, error: TabEnum }>) => {
      state.tab = action.payload.tab;
      state.error = action.payload.error;
    },
  },
  extraReducers: {}
})

export const { setTab } = tabSlice.actions
export default tabSlice.reducer
