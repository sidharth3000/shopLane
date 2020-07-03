import React from 'react'
import {NavLink} from 'react-router-dom'

import './toolbar.css'

import logo from '../../assets/logo/sbag.svg'

const toolbar = () => {
	return (
		<div className='toolbar'>
		<div className='image'>
			<img src={logo} className='logo' alt="product"/>
			<h3 className='shopify'>ShopLane.com</h3>
		</div>
			<input type='text' className='search' placeholder='search here'/>
			<ul className='ul'>
			<li className='li'><NavLink to="/" exact className='link'>Home</NavLink></li>
			<li className='li'><NavLink to="/orders" className='link'>Orders</NavLink></li>
			</ul>
		</div>
		)
}

export default toolbar;