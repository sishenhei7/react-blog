import React from 'react';
import {Link} from 'react-router-dom';
import { List, Tag, BackTop, Col, Row } from 'antd';
import { getColor } from '../../config/methods';
import './list.css'

export default ({ blogList }) => {
	const isLoading = blogList.length === 0 ? true : false;
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
					loading={isLoading}
					dataSource={blogList}
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
	);
}




