import React from 'react'

import './button.css'

const button = (props) => {
	return(
		<div>
			<button className='buy' onClick={(type) => props.buy(type)} >{props.children}</button>
		</div>
		)
}

export default button;