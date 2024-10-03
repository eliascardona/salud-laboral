import '../shared/shared.css'

export default function UserCard({ userDetails }) {
	return (
		<div className='card'>
			<span className='ch'>
				card header
			</span>

			<span className='cb'>
				{
					courseDetails && (
						<span>
							{userDetails.title}
						</span>
					)
				}
			</span>
		</div>
	)
}
