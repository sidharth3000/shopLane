import React from 'react'

import './spinner.css'

import Backdrop from '../backdrop/backdrop'

const spinner = () => (
	<div>
	<div className="loader">Loading...</div>
	<Backdrop show/>
	</div>
	);

export default spinner;