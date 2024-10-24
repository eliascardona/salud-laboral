import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/auth/layerZero/authSlice'

const configuratedStore = configureStore({
	reducer: {
		gAuth: authReducer,
	}
})

export { configuratedStore }