import React from 'react'
import './toolbar.css'

import logo from '../../assets/logo/sbag.svg'

const toolbar = () => {
	return (
		<div className='toolbar'>
		<div className='image'>
			<img src={logo} className='logo'/>
			<h3 className='shopify'>shopify.com</h3>
		</div>
			<input type='text' className='search' placeholder='search here'/>
			<ul>
			<li>home</li>
			<li>orders</li>
			</ul>
		</div>
		)
}

export default toolbar;