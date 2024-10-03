import { useNavigate } from 'react-router-dom'
import '../shared/shared.css'

export default function ProductCard({ courseDetails }) {
	const navigate = useNavigate()

	const navigateTo = (pathname) => {
		navigate(pathname)
	}

	return (
		<div className='card'>
			<span className='ch'>
				card header
			</span>

			<span className='cb'>
				{
					courseDetails && (
						<span>
							{courseDetails.title}
						</span>
					)
				}
				<button 
					type='button'
					className='formBtn'
					onClick={() => {
						navigateTo('/checkout')
					}}
				>
					{"ir a checkout"}
				</button>
			</span>
		</div>
	)
}
