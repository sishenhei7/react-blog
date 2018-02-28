import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Layout from '../components/layout';

export default () => (
	<Router>
	  <div>
			<Route path='/' component={Layout} />
	  </div>
	</Router>
)


