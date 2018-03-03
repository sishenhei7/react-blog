import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, Tag, BackTop, Col, Row } from 'antd';
import { getColor, getBlog, getList } from '../../config/methods';
import './list.css'

class BlogList extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			blogList: [],
		};
	};

	componentWillMount() {
		if (this.props.location.state) {
			this.setState({
					loading: !this.state.loading,
					blogList: this.props.location.state
			});
		} else {
			getBlog().then(json => {
				this.setState({
					loading: !this.state.loading,
					blogList: getList(json)
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
					className='list-wrapper'
				>
					<List
						itemLayout="vertical"
						bordered
						loading={this.state.loading}
						dataSource={this.state.blogList}
						renderItem={item => (
				      <List.Item
								extra={<Tag color='blue'>{item.date}</Tag>}
				      >
				      	<Link to={{
									pathname:`/react-blog/posts/${item.num}`,
									state: item
					      }}>
					      	{item.title}
					      </Link>
					      <Tag color={getColor(item.tag)} style={{ marginLeft: 8 }}>{item.tag}</Tag>
							</List.Item>
							)}
					/>
				</Col>
				<BackTop visibilityHeight={250}>
				  <div className="ant-back-top-inner">UP</div>
				</BackTop>
			</Row>

		)
	}
}
export default BlogList
