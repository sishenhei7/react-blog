import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';

export default () => (
	<Menu mode="horizontal">
			<Menu.Item key='1'>
				<Link to='/'>
					<Icon type="home" spin={true} />首页
				</Link>
			</Menu.Item>

			<Menu.Item key='2'>
				<Link to='/lists'>
					<Icon type="edit" />文章
				</Link>
			</Menu.Item>

			<Menu.Item key='3'>
				<Link to='/about'>
					<Icon type="smile-o" />关于我
				</Link>
			</Menu.Item>
	</Menu>
)
