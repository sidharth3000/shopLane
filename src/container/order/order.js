import React from 'react'

import './order.css'

const order = (props) => (

	<div className='order'>
		<p > <strong>Name : </strong> {props.firstName}  </p>
		<p> <strong>Product : </strong> {props.product}  </p>
		<p > <strong>Address : </strong> {props.address}  </p>
	</div>
)

export default order;