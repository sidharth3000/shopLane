import React from 'react'
import './toolbar.css'
import './pToolbar.css'

import logo from '../../assets/logo/sbag.svg'
import Menu from '../UI/menu/menu.js'


const pToolbar = () => {
	return (
		<div className='pToolbar'>
			<div className='line1'>
				<Menu/>
				<img src={logo} className='pLogo' />
				<h3 style={{color:'#FFB327'}}>shopify</h3>
			</div>
			<div className='pSearch' >
				<input type='text' style={{width: "100%", height: '20px', border: '1px solid  #FFB327'}}/>
			</div>	
		</div>
		)
}

export default pToolbar;