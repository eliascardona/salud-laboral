import { Link } from 'react-router-dom'
import './MainHeader.css'

export default function MainHeader() {
	return (
		<div className='MainHeader__navCtn'>
			<div className='MainHeader__navBody'>

				<span>
					<Link to="/" className='MainHeader__link'>
						home
					</Link>
				</span>
				{/*    navigation link   */}
				<span>
					<Link to="/consultas" className='MainHeader__link'>
						consultas
					</Link>
				</span>


			</div>
		</div>
	)
}
