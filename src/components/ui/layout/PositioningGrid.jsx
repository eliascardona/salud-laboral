import './positioningGrid.css'

export default function PositioningGrid({ position, children }) {
	return (
		<div className='Pos_Grid__gCtn'>
			<div className='Pos_Grid__auxCtn' style={{justifySelf:`${position}`}}>
				{children}
			</div>
		</div>
	)
}
