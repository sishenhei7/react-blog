import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Navigate from './navigate';
import './header.css';

const { Header } = Layout;

export default () => (
	<Header className="header-wrapper">
	  <Row>
      <Col
  	    lg={{ span: 5, offset: 5 }}
  	    md={{ span: 5, offset: 5 }}
  	    xs={{ span: 0 }}
      >
			<Link to='/react-blog' className="logo">馒头加梨子</Link>
      </Col>
	    <Col
		    lg={{ span: 9 }}
		    md={{ span: 9 }}
		    xs={{ span: 24 }}
	    >
	      <Navigate>
	      </Navigate>
	    </Col>

	  </Row>
	</Header>
)


