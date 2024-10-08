import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmpleado } from '../../redux/slices/empleadoSlice'

import PositioningGrid from '../../components/ui/layout/PositioningGrid'
import SignUpForm from '../../components/auth/signup/logic/SignUpForm'

import './styles/page.css'




export default function QueriesPage() {
	const dispatch = useDispatch()
	const datosEmpleado = useSelector(state => state.empleado.datosEmpleado)
	const loading = useSelector(state => state.empleado.loading)

	const serverURL = `http://localhost:8080/manufactory/machines/get/id/1`

	useEffect(() => {
		dispatch(fetchEmpleado(serverURL))
	}, [dispatch])

	return (
		<PositioningGrid position='center'>
			<div>
				{
					loading && (
						<span>loading...</span>
					)
				}

				{
					datosEmpleado != null && (
						<ul>
							<li>{datosEmpleado.maq_id}</li>
							<li>{datosEmpleado.descripcion}</li>
							<li>{datosEmpleado.clase}</li>
						</ul>
					)
				}
			</div>
		</PositioningGrid>
	)
}
