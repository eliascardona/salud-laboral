import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEmpleado } from '../../../../redux/slices/empleadoSlice'

import PositioningGrid from '../../../../components/ui/layout/PositioningGrid'
import SignUpForm from '../../../../components/auth/signup/logic/SignUpForm'

import '../styles/EmpleadoLayout.css'


export default function EmpleadoLayout() {

	async function fetchFunc(evt) {
		console.log(evt.target.attr1.value)
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
					<SignUpForm />
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
									e.preventDefault()
									try {
										await fetchFunc(e)
									} catch (ex) {
										console.log(ex.message)
										
									}
								}}
							>
								<input
									type='text'
									className='input'
									name='attr1'
									placeholder='attr1'
								/>
								<input
									type='text'
									className='input'
									name='attr2'
									placeholder='attr2'
								/>

								<button 
									type='submit'
									className='btn'
								>
									hola
								</button>
							</form>
							{/*   fin del formulario   */}

						</div>
					</div>
				</div>
			</div>
		</PositioningGrid>
	)
}
