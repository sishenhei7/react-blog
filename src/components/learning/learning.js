import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Icon, Collapse } from 'antd';
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
			      	<p><Icon type="heart" /> 这里主要展示我收集的知识资源和我做的一些小东西！ <Icon type="heart" /></p>
					  </Panel>
		  		  <Panel header="建站过程" key="2">
      		  	这是我的建站过程
            	<Link to={{
      					pathname:'/react-blog/posts/9',
      					state: this.props.location.state[this.props.location.state.length - 9]
      	      }}>
      	      	从小白到用antd+react+react-router+issue+es6搭建博客
      	      </Link>
		  		  </Panel>
					  <Panel header="IFE2016" key="3">
					  	这是我做的
			      	<a href="https://sishenhei7.github.io/IFE2016/" target="_blank" rel="noopener noreferrer">IFE2016的习题和作业<Icon type="export" /></a>
					  </Panel>
		  		  <Panel header="知识资源" key="4">
      		  	这是我整理的
            	<Link to={{
      					pathname:'/react-blog/posts/8',
      					state: this.props.location.state[this.props.location.state.length - 8]
      	      }}>
      	      	知识资源
      	      </Link>
		  		  </Panel>
		  		  <Panel header="古龙语录" key="5">
      		  	这是我整理的
            	<Link to={{
      					pathname:'/react-blog/posts/6',
      					state: this.props.location.state[this.props.location.state.length - 6]
      	      }}>
      	      	古龙语录
      	      </Link>
		  		  </Panel>
		  		  <Panel header="开发油猴脚本" key="6">
      		  	这是我开发的
            	<Link to={{
      					pathname:'/react-blog/posts/10',
      					state: this.props.location.state[this.props.location.state.length - 10]
      	      }}>
      	      	油猴脚本
      	      </Link>
		  		  </Panel>
					  <Panel header="impress.js做的PPT" key="7">
					  	这是我
			      	<a href="https://sishenhei7.github.io/impress_js_ppt/" target="_blank" rel="noopener noreferrer">用impress.js做的PPT<Icon type="export" /></a>
			      	<p>(注意：按空格键翻页)</p>
					  </Panel>
					</Collapse>
		    </Col>
		  </Row>
		)
	}
}

export default Learning;
