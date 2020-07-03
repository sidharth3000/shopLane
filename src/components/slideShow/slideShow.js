import React, {Component} from 'react'
import './slideShow.css'

import air from '../../assets/airpods.jpg';
import nike from '../../assets/nike.jpg';
import oneplus from '../../assets/oneplus.jpg';

class slideShow extends Component{

	state= {
		i:0
	}

	prevHandler = () => {
		
			if(this.state.i < 1 )
			{
				this.setState({i:2})
			}
			else{
				this.setState({i:this.state.i-1})
			}
	}

	nextHandler = () => {
		
			if(this.state.i > 1 )
			{
				this.setState({i:0})
			}
			else{
				this.setState({i:this.state.i+1})
			}
	}



	render() {
		
		const show = (
				[
					<div  className='slide'>
						<img src={nike} className='slideImages' alt='producr image'/>
						<a className='prev' onClick={this.prevHandler}> &#10094; </a>
						<a className='next' onClick={this.nextHandler}> &#10095; </a>
						<h3 className='caption'>mercurial X <br/>(new release)</h3>
					</div>,
					<div className='slide'>
						<img src={air} className='slideImages' alt='producr image'/>
						<a className='prev' onClick={this.prevHandler}> &#10094; </a>
						<a className='next' onClick={this.nextHandler}> &#10095; </a>
						<h3 className='caption'>airpods pro <br/>(new release)</h3>
					</div>,
					<div className='slide'>
						<img src={oneplus} className='slideImages' alt='producr image'/>
						<a className='prev' onClick={this.prevHandler}> &#10094; </a>
						<a className='next' onClick={this.nextHandler}> &#10095; </a>
						<h3 className='caption'>oneplus 8 pro <br/>(new release)</h3>
					</div>
				]
			)

		return(
			<div className='s'>
			<div className='fade'>
				 {show[this.state.i]}
			</div>
			</div>
			)
	}

}

export default slideShow;