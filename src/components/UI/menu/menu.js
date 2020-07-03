import React from 'react'
import './menu.css'

const menu = (props) => {
	return(
		<div className='menu' onClick={props.open}>
		<div className='bar'></div>
		<div className='bar'></div>
		<div className='bar'></div>
		</div>
		)
}

export default menu;