import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEmpleado = createAsyncThunk('empleado/get',
	async (url, thunkAPI) => {
		const response = await fetch(url, {
			mode: 'no-cors',
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		const data = await response.json()
		console.log(data)
		return data
	}
)


const empleadoSlice = createSlice({
  name: 'empleado',
  initialState: {
    loading: true,
    error: null,
    datosEmpleado: null,
  },
  reducers: {
    completeFetchOperation: (state) => {
      state.loading = true;
    }
  },
  extraReducers: builder => {
    builder
      .addCase('empleado/get/pending', (state, action) => {
        state.error = null;
      })
      .addCase('empleado/get/fulfilled', (state, action) => {
        state.datosEmpleado = action.payload;
        state.loading = false;
      })
      .addCase('empleado/get/rejected', (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})




export const { completeFetchOperation } = empleadoSlice.actions;
export default empleadoSlice.reducer;



