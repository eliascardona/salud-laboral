import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PositioningGrid from '../../components/ui/layout/PositioningGrid'
import SignUpForm from '../../components/auth/signup/logic/SignUpForm'
import './styles/page.css'


export default function QueriesPage() {
	const dispatch = useDispatch()
	const courseDetails = useSelector(state => state.course.courseDetails)

	return (
		<PositioningGrid position='center'>
			<div className='ly'>
				<div className='full'></div>
				<SignUpForm />
			</div>
		</PositioningGrid>
	)
}
