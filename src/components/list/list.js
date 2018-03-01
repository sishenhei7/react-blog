import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { List, Icon, Tag } from 'antd';

class BlogList extends Component {

	render() {
		const pagination = {
		  pageSize: 10,
		  current: 1,
		  total: this.props.location.state.length,
		  onChange: (() => {}),
		};

		return (
			<List
				itemLayout="vertical"
				size="small"
				bordered
				pagination={pagination}
				dataSource={this.props.location.state}
				renderItem={item => (
		      <List.Item>
			      <Link to={{
							pathname:`posts/${item.num}`,
							state: item
			      }}>
			      	{item.title}
			      	<Tag color={`#${item.color}`}>{item.tag}</Tag>
			      	{item.date}
			      </Link>
					</List.Item>
					)}
			/>
		)
	}
}
export default BlogList
