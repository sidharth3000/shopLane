import React from 'react'
import classes from './sideDrawer.css'
import {NavLink} from 'react-router-dom'

import Backdrop from '../UI/backdrop/backdrop.js'
import logo from '../../assets/logo/sbag.svg'

const sideDrawer = (props) => {

	if(props.open){

		return (
		<div>
		<div className='sideDrawer open'>
			<img src={logo} className='sLogo' />
			<br/><br/>
			<h2 className='options'><NavLink to="/" exact className='link'>Home</NavLink></h2>
			<h2 className='options'><NavLink to="/orders" exact className='link'>Orders</NavLink></h2>
		</div>
			<Backdrop show={props.open} clicked={props.closed}/>
		</div>	
		)
	}

	else{

		return (
		<div>
		<div className='sideDrawer close'>
			<img src={logo} className='sLogo' />
			<br/><br/>
			<h2 className='options'>Home</h2>
			<h2 className='options'>Orders</h2>
		</div>
			<Backdrop show={props.open} clicked={props.closed}/>
		</div>	
		)
	}
	
	
}

export default sideDrawer;
