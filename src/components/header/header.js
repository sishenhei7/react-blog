import React from 'react'
import { Layout, Row, Col } from 'antd';
import Navigate from './navigate';

const { Header } = Layout;

export default () => (
	<Header className="header">
	  <Row>
	    <Col
	      lg={{span: 5}}
	      md={{span: 5}}
	      xs={{span: 24}}
	    >
	      <div className="logo">
	      	馒头加梨子
	      </div>
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


