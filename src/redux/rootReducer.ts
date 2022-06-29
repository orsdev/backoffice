import { combineReducers } from '@reduxjs/toolkit'
import metrics from './slices/metrics'
import tab from './slices/tab'

const rootReducer = combineReducers({
  tab: tab,
  metrics: metrics
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
