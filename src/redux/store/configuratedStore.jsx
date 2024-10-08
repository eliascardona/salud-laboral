import { configureStore } from '@reduxjs/toolkit'
import courseReducer from '../slices/mainSlice'
import empleadoReducer from '../slices/empleadoSlice'

const configuratedStore = configureStore({
	reducer: {
		course: courseReducer,
		empleado: empleadoReducer
	}
})


export { configuratedStore }
