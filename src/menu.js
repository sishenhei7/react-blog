import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Menu extends Component {
	render() {
		return(
			<div>
				<ul>
					<li><Link to='/'>首页</Link></li>
					<li><Link to='/lists'>文章</Link></li>
					<li><Link to='/about'>关于我</Link></li>
				</ul>
			</div>
			)
	}
}
