import React, { Component } from 'react';
import {
	Route,
} from 'react-router-dom';
import { Layout } from 'antd';
import NProgress from 'nprogress';
import Header from './header/header';
import { getBlog, getList } from '../config/methods';
import './layout.css';


const { Footer, Content } = Layout;
const contentHeight = document.body.clientHeight - 64 - 71;

function RouteWithSubRoutes({ route, blogList }) {
	return (
	  <Route
		path={route.path}
		exact
		render={props => (
		  // pass the sub-routes down to keep nesting
		  <route.component {...props} blogList={blogList} routes={route.routes} />
		)}
	  />
	);
}

class MyLayout extends Component {
	constructor() {
		super();
		this.state = {
			blogList: [],
		};
		// NProgress.start();
	};

	componentDidMount() {
		NProgress.start();
		let blogListData = sessionStorage.getItem('blogListData') || '';
		if(!blogListData) {
			getBlog().then(json => {
				const data = getList(json);
				this.setState({
					blogList: data
				});
				NProgress.done();
				sessionStorage.setItem('blogListData', JSON.stringify(data));
			});
		} else {
			this.setState({
				blogList: JSON.parse(blogListData)
			});
			NProgress.done();
		}
	};

	render() {
		return(
			<Layout>
				<Header></Header>
				<Content style={{ padding: '24px 0', background: '#fff', minHeight: contentHeight, height: '100%' }}>
					{this.props.routes.map((route, i) => (
						<RouteWithSubRoutes key={i} route={route} blogList={this.state.blogList} />
					))}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
				Copyright © 馒头加梨子 2018
				</Footer>
			</Layout>
		);
	}
}

export default MyLayout;


