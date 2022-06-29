import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';

export const _getMetrics = createAsyncThunk(
  'get/metrics',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: 'get',
        url: './data.json',
      })

      return response;
    } catch (err: any) {
      return rejectWithValue('Something went wrong')
    }
  }
)



type MetricState = {
  metrics: any,
  data: any
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const metricSlice = createSlice({
  name: 'metrics',
  initialState: {
    metrics: null,
    data: null,
    status: 'idle'
  } as MetricState,
  reducers: {

  },
  extraReducers: {
    [_getMetrics.pending.toString()]: (state: MetricState) => {
      state.status = 'loading'
      state.metrics = null;
    },
    [_getMetrics.fulfilled.toString()]: (state: MetricState, action: PayloadAction<any>) => {
      state.status = 'succeeded'
      state.metrics = action.payload.data
      state.data = action.payload.data.data[0]
    },
    [_getMetrics.rejected.toString()]: (state: MetricState, action) => {
      state.status = 'failed'
      toast.error(action.payload)
    }

  }
})

export default metricSlice.reducer
