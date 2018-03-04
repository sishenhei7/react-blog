import React from 'react';
import { Layout } from 'antd';
import Header from './header/header';
import Routes from './routes/routes';
import './layout.css';


const { Footer, Content } = Layout;
const contentHeight = document.body.clientHeight - 64 - 71;

export default () => (
	<Layout>
		<Header></Header>
		<Content style={{ padding: '24px 0', background: '#fff', minHeight: contentHeight, height: '100%' }}>
			<Routes></Routes>
		</Content>
		<Footer style={{ textAlign: 'center' }}>
		  Copyright © 馒头加梨子 2018
		</Footer>
	</Layout>
)

