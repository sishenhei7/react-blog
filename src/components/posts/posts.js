import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import { Row, Col } from 'antd';
import Catalog from './catalog';
import Article from './article';
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
	componentDidMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});

		// this.setState({
		// 	loading: !this.state.loading,
		// 	blog: this.props.blogList[this.props.blogList.length - this.props.match.params.id]
		// });
	};

	render() {
		const loading = this.props.blogList.length === 0 ? true : false;
		const blog = this.props.blogList[this.props.blogList.length - this.props.match.params.id];
		return (
			<Row>
				<Col
					lg={{ span: 14, offset: 5 }}
					md={{ span: 14, offset: 5 }}
					xs={{ span: 24 }}
					className='posts-wrapper'
				>
					<Article loading={loading} blog={blog}></Article>
				</Col>
				<Col
					lg={{ span: 3, offset: 0 }}
					md={{ span: 3, offset: 0 }}
					xs={{ span: 0 }}
        		>
					{ loading ? null : <Catalog desc={blog.desc}></Catalog> }
        		</Col>
			</Row>
		)
	}
}
export default Posts
