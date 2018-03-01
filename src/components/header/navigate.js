import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
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
			console.log(getList(json));
			this.setState({
				blogList: getList(json)
			});
		});
	};

	render() {
		return (
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '64px' }}
			>
				<Menu.Item key='1'>
					<Link to='/'>
						<Icon type='home' spin='true' />首页
					</Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<Link to={{
						pathname:'/list',
						state:this.state.blogList
					}}>
						<Icon type='edit' spin='true' />文档
					</Link>
				</Menu.Item>
				<Menu.Item key='3'>
					<Link to='/about'>
						<Icon type='smile-o' spin='true' />关于我
					</Link>
				</Menu.Item>
			</Menu>
		)
	}
}

export default Navigate

