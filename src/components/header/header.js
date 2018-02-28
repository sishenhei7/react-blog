import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import Navigate from '../menu/menu';

const { Header } = Layout;

export default () => (
	<Header className="header-container">
	  <Row>
	    <Col
	      lg={{span: 5}}
	      md={{span: 5}}
	      xs={{span: 24}}
	    >
	      <Link to='/' className="logo">
	      	Bora's Blog
	      </Link>
	    </Col>

	    <Col
	      lg={{span: 7}}
	      md={{span: 7}}
	      xs={{span: 24}}
	    >
	      <Navigate>
	      </Navigate>
	    </Col>

	  </Row>
	</Header>

)
