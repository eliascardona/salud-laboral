import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../../../lib/sdk/firebase'

export const fromLayerZeroGetAuthCurrentUser = createAsyncThunk('firebase/currentUser',
	async (_, { rejectWithValue }) => {
    try {
        return new Promise((resolve, reject) => {
          auth.onAuthStateChanged(
            user => {
              if (user) {
                resolve(user)
              }
              reject('common rejection - no user')
            }
          )
        })
    } catch(sdkErr) {
      rejectWithValue(`thunk rejection - ${sdkErr.message}`)
    }

	}   // callback de asynThunk
)

const authLogicalSlice = createSlice({
  name: 'gAuth',
  initialState: {
    currentUser: null,
    loadingAuthSDK: true,
    errorInAuthSDK: false,
    currentUser: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase('firebase/currentUser/pending', (state, action) => {
      state.loading = false;
    })
    .addCase('firebase/currentUser/fulfilled', (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase('firebase/currentUser/rejected', (state, action) => {
      state.errorInAuthSDK = action;
    })
  }
})

// export const { commonReducers } = authLogicalSlice.actions
export default authLogicalSlice.reducer;