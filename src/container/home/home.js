import React, {Component} from 'react';

import Toolbar from '../../components/toolbar/toolbar.js'
import Ptoolbar from '../../components/toolbar/pToolbar.js'
import Body from '../body/body.js'
import Footer from '../../components/footer/footer.js'
import SideDrawer from '../../components/sideDrawer/sideDrawer.js'

class Home extends Component {
	render () {
		return(
			<div>
				<Toolbar/>
				<Ptoolbar/>
				<SideDrawer />
				<Body/>
				<Footer/>
			</div>
			)
	}
}

export default Home;