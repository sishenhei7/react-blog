import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import fetch from 'isomorphic-fetch';
import { Row, Col, Card, BackTop, Tag } from 'antd';
import Catalog from './catalog'
import { apiUrl } from '../../config/config';
import { getBlog, getList, getColor, setAnchor } from '../../config/methods';
import '../../highlight.min.css';
import './posts.css';

const defaultBlog = {
	num: 1,
	title: '获取中',
	tag: '',
	color: '',
	date: '',
	desc: ''
};

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			blog: defaultBlog,
		};
	};

	componentWillMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});


		if (this.props.location.state) {
			this.setState({
					loading: !this.state.loading,
					blog: this.props.location.state
			});
		} else {
			getBlog().then(json => {
				this.setState({
					loading: !this.state.loading,
					blog: getList(json)[this.props.match.params.id]
				});
			});
		}
	};

	render() {
		return (
			<Row>
				<Col
					lg={{ span: 14, offset: 5 }}
					md={{ span: 14, offset: 5 }}
					xs={{ span: 24 }}
					className='posts-wrapper'
				>
					<Card
						loading={this.state.loading}
						title={this.state.blog.title}
						extra={[
							<Tag color={getColor(this.state.blog.tag)} key="tag">{this.state.blog.tag}</Tag>,
							<Tag color="blue" key="time">{this.state.blog.date}</Tag>
						]}
					>
					  <div dangerouslySetInnerHTML={{__html:setAnchor(marked(this.state.blog.desc))}}></div>
					</Card>
				</Col>
				<Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          xs={{ span: 0 }}
        >
					<Catalog desc={this.state.blog.desc}></Catalog>
        </Col>
        <BackTop visibilityHeight={250}>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
			</Row>
		)
	}
}
export default Posts
