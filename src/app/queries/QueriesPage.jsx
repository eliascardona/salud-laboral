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

	async function fetchFunc() {
		evt.preventDefault()
		const temp = {
			attr1: evt.target.attr1.value,
			attr2: evt.target.attr2.value,
		}
		console.log(temp)
		/*dispatch(
			fetchEmpleado(serverURL)
		)*/
	}

	return (
		<PositioningGrid position='center'>
			<div className='ly'>
				<div className='sidebar'>
					<h3>
						Sidebar
					</h3>
					<h3>
						(menu)
					</h3>
				</div>
				<div className='full'>
					<div className='innerLy'>
						<div className='full'>
							<h3>
								leer datos
							</h3>
							<button
								type='button'
								className='btn'
								onClick={() => {
									console.log('click')
								}}
							>
								click
							</button>
						</div>
						<div className='full'>
							<h3>
								crear datos
							</h3>
							<form 
								onSubmit={async (e) => {
									await fetchFunc(e)
								}}
							>
								<input
									type='text'
									name='attr1'
									className='input'
									placeholder='attr1'
								/>
								<input
									type='text'
									name='attr1'
									className='input'
									placeholder='attr1'
								/>

								<button
									type='submit'
									className='btn'
								>
									click
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</PositioningGrid>
	)
}
