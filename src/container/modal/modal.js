import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Link} from 'react-router-dom'

import Button from '../../components/UI/button/button.js'
import Backdrop from '../../components/UI/backdrop/backdrop.js'
import * as actionTypes from '../../store/action.js'
import Spinner from '../../components/UI/Spinner/spinner'
import './modal.css'


// import Spider from '../../assets/spider.jpg'
// import Head from '../../assets/head.jpg'
// import Cable from '../../assets/cable.jpg'
// import Tshirt from '../../assets/tShirt.jpg'
// import Se from '../../assets/se.jpg'
// import Sony from '../../assets/sony.jpg'
// import Power from '../../assets/power.png'
// import Joy from '../../assets/joy.jpg'

class Modal extends Component {

	state = {
		loading: false
	}

	// purchaseContinueHandler = (type) => {
	// 	this.setState({loading: true})
	// 	const item = {type};
	// 	axios.post('/orders.json', item)
	// 	.then(response =>{
	// 		this.setState({loading: false})
	// 	})
	// 	.catch(error => {
	// 		this.setState({loading: false})
	// 	});
	// }

	render () {



		let modal = <div>

			<div className='modal'>
				<img src={this.props.image} alt='product image' className='modalImage'/>
				<h2>{this.props.name}</h2>
				<h3 className='price'>&#8377; {this.props.price}</h3>
				<Link to='/checkout' ><button className='modalButton' >continue</button></Link>	
				<div class="closebtn" onClick={this.props.hide}>&times;</div>			
			</div>

			<div>
			<Backdrop show/>
			</div>			
			</div>

		if(this.state.loading)
		{
			modal = (<Spinner/>)
		}

		const imageName = 'Spider';
		
		

		if(this.props.show)
		{
			return(
				<div>
					{modal}
				</div>
			)
		}

		else
		{
			return(
				<div></div>)
		}
		
		
	}
}

const mapStateToProps = state => {
	return {
		name: state.name,
		image: state.image,
		price: state.price
	}
}

const mapDispatchToProps = dispatch => {
	return{
		hide: () => dispatch({type: actionTypes.HIDE_MODAL})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);