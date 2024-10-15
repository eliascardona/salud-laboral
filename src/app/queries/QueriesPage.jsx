import { useDispatch, useSelector } from 'react-redux'
import EmpleadoLayout from '../../components/creation/empleado/logic/EmpleadoLayout'

export default function QueriesPage() {
	const dispatch = useDispatch()
	const datosEmpleado = useSelector(state => state.empleado.datosEmpleado)
	const loading = useSelector(state => state.empleado.loading)

	return (
		<>
			<EmpleadoLayout />
		</>
	)
}
