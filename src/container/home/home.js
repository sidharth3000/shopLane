import React, {Component} from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/toolbar/toolbar.js'
import Ptoolbar from '../../components/toolbar/pToolbar.js'
import Body from '../body/body.js'
import Footer from '../../components/footer/footer.js'
import SideDrawer from '../../components/sideDrawer/sideDrawer.js'
import Modal from '../modal/modal'
import {sideDrawerClose, sideDrawerOpen} from '../../store/action.js'

class Home extends Component {


	render () {
		console.log(this.props.showSideDrawer)
		return(
			<div>
				<Toolbar/>
				<Ptoolbar opened={this.props.opened}/>
				<SideDrawer closed={this.props.closed} open={this.props.showSideDrawer}/>
				<Body/>
				<Footer/>
				<Modal show={this.props.showModal}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);