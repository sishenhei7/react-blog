import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import { Row, Col } from 'antd';
import Catalog from './catalog';
import Article from './article';
import { getBlog, getList } from '../../config/methods';
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
					<Article loading={this.state.loading} blog={this.state.blog}></Article>
				</Col>
				<Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 0 }}
          xs={{ span: 0 }}
        >
					<Catalog desc={this.state.blog.desc}></Catalog>
        </Col>
			</Row>
		)
	}
}
export default Posts
