import React from 'react';
import { Row, Col, Icon, Collapse } from 'antd';
import './about.css';

const Panel = Collapse.Panel;

export default () => (
  <Row>
    <Col
	    lg={{ span: 14, offset: 5 }}
	    md={{ span: 14, offset: 5 }}
	    xs={{ span: 24 }}
	    className="about-wrapper"
    >
			<Collapse defaultActiveKey={['1']}>
			  <Panel header="关于我" key="1">
	      	<p>关键词：前端，数学，古龙迷，宅。</p>
					<p style={{marginTop: 20}}>这个博客主要是用来记录我的一些技术点滴，和一些其他方面的随笔，感悟，生活等。</p>
			  </Panel>
			  <Panel header="我的简历" key="2">
			  	<p>嘿！你好，这是简历！(2018.03.03更新)</p>
			  </Panel>
			  <Panel header="联系我" key="3">
	      	<p><Icon type="mail" /> 邮箱：1417145026@qq.com</p>
					<p style={{marginTop: 20}}>
						<Icon type="github" /> Github：
						<a href="https://github.com/sishenhei7" target="_blank" rel="noopener noreferrer">sishenhei7</a>
					</p>
			  </Panel>
			</Collapse>
    </Col>
  </Row>
)
