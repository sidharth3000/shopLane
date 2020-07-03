import React, {Component} from 'react'
import axios from '../../axios-orders'
import { connect } from 'react-redux';

import Toolbar from '../../components/toolbar/toolbar'
import PToolbar from '../../components/toolbar/pToolbar'
import Order from '../order/order'
import './orders.css'
import SideDrawer from '../../components/sideDrawer/sideDrawer.js'
import {sideDrawerClose, sideDrawerOpen} from '../../store/action.js'
import Spinner from '../../components/UI/Spinner/spinner'


class Orders extends Component {
	state = {
		orders: [],
		loading: true
	}

	componentDidMount() {
		axios.get('/orders.json')
			.then(response => {
			const fetchedOrders = [];
			for(let key in response.data){
			 fetchedOrders.push({
					...response.data[key],
					id: key
				})
			 console.log(fetchedOrders)
			}

			this.setState({loading: false, orders: fetchedOrders})
		})
		.catch(err => {
			this.setState({loading: false})
			alert('error loading orders, please check your internet connection')
		})
	}

	render(){

		let oders = 
			<div className='color'>
				<Toolbar />
				<PToolbar opened={this.props.opened}/>
				<h1 className='heading'>Orders</h1>
				<SideDrawer closed={this.props.closed} open={this.props.showSideDrawer}/>
				<div className='orders'>
					{this.state.orders.map(order => (
					<Order 
					key={order.id}
					firstName={order.firstName}
					product={order.product}
					address={order.address}
					/>
					))}
				</div>
			</div>

			if(this.state.loading)
			{
				oders = <Spinner />
			}

		return(
			<div>
				{oders}
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
			showSideDrawer: state.showSideDrawer,
			showModal : state.showModal
	}
}

const mapDispatchToProps = dispatch => {
	return{
		closed: () => dispatch(sideDrawerClose()),
		opened: () => dispatch(sideDrawerOpen())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);