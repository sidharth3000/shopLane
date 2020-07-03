import React from 'react';
import Home from './container/home/home.js'
import Checkout from './container/checkout/checkout'
import Orders from './container/orders/orders'

import {Route} from 'react-router-dom'

function App() {
  return (
  	<div>
    	<Route path="/" exact component={Home} />
    	<Route path="/checkout" component={Checkout} />
    	<Route path="/orders" component={Orders} />
	</div>
  );
}

export default App;
