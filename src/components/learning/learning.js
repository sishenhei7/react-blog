import React, { Component } from 'react';
import { Row, Col, Icon, Collapse } from 'antd';
import {Link} from 'react-router-dom';
import './learning.css';

const Panel = Collapse.Panel;

class Learning extends Component {
	render() {
		return(
		  <Row>
		    <Col
			    lg={{ span: 14, offset: 5 }}
			    md={{ span: 14, offset: 5 }}
			    xs={{ span: 24 }}
			    className="learning-wrapper"
		    >
					<Collapse defaultActiveKey={['1']}>
					  <Panel header="介绍" key="1">
			      	<p>这里主要展示我收集的知识资源和我做的一些小东西！</p>
					  </Panel>
					  <Panel header="知识资源" key="2">
					  	这是我整理的
			      	<Link to={{
								pathname:'/react-blog/posts/8',
								state: this.props.location.state[this.props.location.state.length - 8]
				      }}>
				      	知识资源
				      </Link>
					  </Panel>
					  <Panel header="IFE2016" key="3">
					  	这是我做的
			      	<a href="https://github.com/sishenhei7" target="_blank" rel="noopener noreferrer">IFE2016的习题和作业<Icon type="link" /></a>
					  </Panel>
		  		  <Panel header="古龙语录" key="4">
		  		  	这是我看古龙文集整理的
		        	<Link to={{
		  					pathname:'/react-blog/posts/6',
		  					state: this.props.location.state[this.props.location.state.length - 6]
		  	      }}>
		  	      	古龙语录
		  	      </Link>
		  		  </Panel>
					</Collapse>
		    </Col>
		  </Row>
		)
	}
}

export default Learning;
