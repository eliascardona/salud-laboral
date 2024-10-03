import './positioningGrid.css'

export default function PositioningGrid({ position, children }) {
	return (
		<div className='gCtn'>
			<div className='auxCtn' style={{justifySelf:`${position}`}}>
				{children}
			</div>
		</div>
	)
}
