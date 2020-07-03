import React, {Component} from 'react'
import { connect } from 'react-redux';
import './checkout.css';

import Logo from '../../assets/logo/sbag.svg'
import Spinner from '../../components/UI/Spinner/spinner'

import {showModal, hideModal, updateFName, updateLName, updateAddress} from '../../store/action.js';
import axios from '../../axios-orders.js';
import {Redirect} from 'react-router-dom'


class Checkout extends Component{

	state = {
		loading: false,
		submited: false
	}

	firstNameHandler = (event) => {
		event.preventDefault()
		this.props.updateFName(event.target.value)
		console.log(this.props.fName)
	}

	lastNameHandler = (event) => {
		event.preventDefault()
		this.props.updateLName(event.target.value)
		console.log(this.props.lName)
	}

	addressHandler = (event) => {
		event.preventDefault()
		this.props.updateAddress(event.target.value)
		console.log(this.props.address)
	}

	purchaseContinueHandler = (product, firstName, lastName, address) => {
		// type.preventDefault();
		// this.setState({loading: true})
		const item = {product, firstName, lastName, address};
		this.props.hideModal();
		
		this.setState({loading: true})
		axios.post('/orders.json', item)
		.then(response =>{
			this.setState({loading: false})
			this.setState({submited: true})
			alert('Your order was placed successfully!')
		})
		.catch(error => {
			this.setState({loading: false})
			alert('Error in placing your order, please check your internet connection')
		});
	}


	render(){

		let redirect = null;

		if(this.state.submited)
		{
			redirect=<Redirect to='/' />
		}

		let checkOut = <div className='form'>
			{redirect}
			<h1 className='shopify'>Shopify</h1>
			<img src={Logo} alt='logo' className='appLogo'/>
			<h2 style={{color: 'white'}}>Checkout</h2>
			<h2 style={{color: ' #FF5C20'}}>{this.props.name}</h2>
			<div>
				<input type='text' className='info firstName' placeholder='First Name' onChange={this.firstNameHandler}/><br/>
				<input type='text' className='info LastName' placeholder='Last Name' onChange={this.lastNameHandler}/><br/>
				<input type='text' className='info Address' placeholder='Address' onChange={this.addressHandler}/><br/>
				
				<button className='checkoutButton cancel'> Cancel</button>
				<button className='checkoutButton' onClick={() => this.purchaseContinueHandler(this.props.name,this.props.fName,this.props.lName,this.props.address)}> Place Order</button>

			</div>
			</div>

		if(this.state.loading)
		{
			checkOut = <Spinner />
		}
		return(
			<div>
				{checkOut}
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		name: state.name,
		fName : state.firstName,
		lName : state.lastName,
		address: state.address,
		showModal : state.showModal
	}
}

const mapDispatchToProps = dispatch => {
	return{
		
		updateFName: (value) => dispatch(updateFName(value)),
		updateLName: (value) => dispatch(updateLName(value)),
		updateAddress: (value) => dispatch(updateAddress(value)),
		hideModal: () => dispatch(hideModal())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);