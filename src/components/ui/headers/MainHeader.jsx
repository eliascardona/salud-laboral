import './mainHeader.css'
import { Link } from 'react-router-dom'

export default function MainHeader() {
	return (
		<div className='navCtn'>
			<div className='navBody'>

				<span>
					<Link to="/" className='link'>
						home
					</Link>
				</span>
				{/*    navigation link   */}
				<span>
					<Link to="/consultas" className='link'>
						consultas
					</Link>
				</span>


			</div>
		</div>
	)
}
