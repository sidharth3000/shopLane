import React, {Component} from 'react'
import { connect } from 'react-redux';

import './cards.css'
import Button from '../../components/UI/button/button.js'
import {showModal, hideModal} from '../../store/action.js'

import Spider from '../../assets/spider.jpg'
import Head from '../../assets/head.jpg'
import Cable from '../../assets/cable.jpg'
import Tshirt from '../../assets/tShirt.jpg'
import Se from '../../assets/se.jpg'
import Sony from '../../assets/sony.jpg'
import Power from '../../assets/power.png'
import Joy from '../../assets/joy.jpg'


class Cards extends Component{

	render(){
		return(
			<div className='container'>

			<div className='card'>

				<div className='upper'>
				<img src={Spider} className='pImage' alt="product image"/>
				<div className='text'>
				<h3>Marvel Spiderman (PS4)</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button  buy={() => this.props.show('Spider Man (PS4)', 'Spider',  '3500')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 3500 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Head} className='pImage' alt="product image"/>
				<div className='text'>
				<h3>Microsoft Headphones 2</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button buy={() => this.props.show('Microsoft Headphones 2', 'Head',  '15000')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 15000 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Joy} className='pImage' alt="product image"/>
				<div className='text'>
				<h3>Nike joyride</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button  buy={() => this.props.show('Nike Joyride', 'Spider', '18000')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 18000 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Power} className='pImage' alt="product"/>
				<div className='text'>
				<h3>Xiaomi 1000 mah Power Bank</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button  buy={() => this.props.show('Xiaomi 1000 mah Power Bank', 'Spider', '1000')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 1000 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Sony} className='pImage' alt="product"/>
				<div className='text'>
				<h3>Xiaomi backpack</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button  buy={() => this.props.show('Xiaomi backpack', 'Spider', '1200')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 1200 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Cable} className='pImage' alt="product"/>
				<div className='text'>
				<h3>Type C-C cable</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button buy={() => this.props.show('Type C-C Cable', 'Spider', '250')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 250 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Se} className='pImage' alt="product"/>
				<div className='text'>
				<h3>iPhone SE (2 gen.)</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button buy={() => this.props.show('iPhone SE', 'Spider', '38000')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 38000 </h4>
				</div>

			</div>

			<div className='card'>

				<div className='upper'>
				<img src={Tshirt} className='pImage' alt="product" />
				<div className='text'>
				<h3>Polo Tshirt</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				</div>

				<div className='bottom'>
				<Button buy={() => this.props.show('Polo Tshirt', 'Spider', '600')}>BUY NOW</Button>
				<h4 style={{margin: '0'}}>&#8377; 600 </h4>
				</div>

			</div>
			


			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		showModal: state.showModal
	}
}

const mapDispatchToProps = dispatch => {
	return{
		show: (name, image, price) => dispatch(showModal(name, image, price)),
		hide: () => dispatch(hideModal())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards);