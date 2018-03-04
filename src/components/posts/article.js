import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import { Card, BackTop, Tag } from 'antd';
import { getColor, setAnchor } from '../../config/methods';
import '../../highlight.min.css';

class Article extends Component {
	componentWillMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});
	};

	render() {
		return (
			<Card
				loading={this.props.loading}
				title={this.props.blog.title}
				extra={[
					<Tag color={getColor(this.props.blog.tag)} key="tag">{this.props.blog.tag}</Tag>,
					<Tag color="blue" key="time">{this.props.blog.date}</Tag>
				]}
			>
			  <div className='article-wrapper' dangerouslySetInnerHTML={{__html:setAnchor(marked(this.props.blog.desc))}}></div>
			  <BackTop visibilityHeight={250}>
			    <div className="ant-back-top-inner">UP</div>
			  </BackTop>
			</Card>
		)
	}
}
export default Article
