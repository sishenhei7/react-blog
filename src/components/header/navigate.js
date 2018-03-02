import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import { Menu, Icon, Card, Button, Radio, Tabs } from 'antd';
import { getBlog, getList } from '../../config/methods';

class Navigate extends Component {
	constructor() {
		super();
		this.state = {
			blogList: [],
		};
	};

	componentWillMount() {
		getBlog().then(json => {
			this.setState({
				blogList: getList(json)
			});
		});
	};

	handlehistory(e){
		let historyPath = {
			'馒头加梨子': '/',
			'文档': {pathname:'/list', state:this.state.blogList},
			'关于我': '/about'
		};
		this.props.history.push(historyPath[e.target.value]);
	}

	render() {
		return (
			<Radio.Group onChange={this.handlehistory.bind(this)} className="navigate-wrapper">
			  <Radio.Button value="馒头加梨子"><Icon type='home'/>馒头加梨子</Radio.Button>
			  <Radio.Button value="文档"><Icon type='edit'/>文档</Radio.Button>
			  <Radio.Button value="关于我"><Icon type='smile-o'/>关于我</Radio.Button>
			</Radio.Group>
		)
	}
}

export default withRouter(Navigate)

