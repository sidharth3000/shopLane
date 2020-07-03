import React, {Component} from 'react';

import SlideShow from '../../components/slideShow/slideShow'
import Card from '../cards/cards.js'


class Body extends Component {
	render () {
		return(
			<div>
				<SlideShow />
				<Card/>
			</div>
			)
	}
}

export default Body;