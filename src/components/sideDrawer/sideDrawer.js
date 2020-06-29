import React from 'react'
import './sideDrawer.css'

import Backdrop from '../UI/backdrop/backdrop.js'
import logo from '../../assets/logo/sbag.svg'

const sideDrawer = () => {
	return (
		<div>
		<div className='sideDrawer'>
			<img src={logo} className='sLogo' />
			<br/><br/>
			<h2>home</h2>
			<h2>orders</h2>
		</div>
			<Backdrop show/>
		</div>	
		)
}

export default sideDrawer;