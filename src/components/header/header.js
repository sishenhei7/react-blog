import React from 'react';
import { Layout, Row, Col } from 'antd';
import Navigate from './navigate';
import './header.css';

const { Header } = Layout;

export default () => (
	<Header className="header-wrapper">
	  <Row>
	    <Col
		    lg={{ span: 14, offset: 5 }}
		    md={{ span: 14, offset: 5 }}
		    xs={{ span: 24 }}
	    >
	      <Navigate>
	      </Navigate>
	    </Col>

	  </Row>
	</Header>
)


