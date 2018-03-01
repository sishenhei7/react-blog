import React, { Component } from 'react';
import {
	Row,
	Col,
} from 'antd'
import Header from './header'
import Menu from './menu'
import './layout.css'

class Layout extends Component {
	render() {
		return (
			<div>
				<h1>hahahhaha</h1>
				<Row>
					<Col
	          lg={{span: 4}}
	          md={{span: 4}}
	          xs={{span: 0}}
	        >
	          <div className="logo1">
	          </div>
	        </Col>
	        <Col
	          lg={{span: 14}}
	          md={{span: 14}}
	          xs={{span: 0}}
	        >
	          <div className="logo2">
	          </div>
	        </Col>
	        <Col
	          lg={{span: 8}}
	          md={{span: 8}}
	          xs={{span: 0}}
	        >
	          <div className="logo3">
	          </div>
	        </Col>
				</Row>
				<Header></Header>
				<Menu></Menu>
			</div>
		)
	}
}
export default Layout
