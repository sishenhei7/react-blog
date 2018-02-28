import React from 'react';
import { Layout } from 'antd';
import Header from './header/header';
import Routes from './routes/routes';
import './layout.css';

const { Footer, Content } = Layout;

export default () => (
	<Layout>
		<Header></Header>
		<Content>
			<Routes></Routes>
		</Content>
		<Footer style={{ textAlign: 'center' }}>
		  Copyright © 馒头加梨子 2018
		</Footer>
	</Layout>
)

