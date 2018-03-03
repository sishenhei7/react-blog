import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Radio } from 'antd';
import { getBlog, getList } from '../../config/methods';

const navigateConfig = [{
	value: "文档",
	icon: "edit",
	content: "文档"
}, {
	value: "作品",
	icon: "bulb",
	content: "作品"
}, {
	value: "关于",
	icon: "smile-o",
	content: "关于"
}]

class Navigate extends Component {
	constructor() {
		super();
		this.state = {
			blogList: [],
		};
	};

	componentWillMount() {
		getBlog().then(json => {
			this.setState({
				blogList: getList(json)
			});
		});
	};

	handlehistory(e){
		let historyPath = {
			'文档': {pathname:'/react-blog', state:this.state.blogList},
			'作品': {pathname:'/react-blog/learning', state:this.state.blogList},
			'关于': '/react-blog/about'
		};
		this.props.history.push(historyPath[e.target.value]);
	}

	render() {
		return (
			<Radio.Group className="navigate-wrapper">
				{navigateConfig.map((item) => (
					<Radio.Button key={item.value} value={item.value} onClick={this.handlehistory.bind(this)}><Icon type={item.icon}/>{item.content}</Radio.Button>
					))}
			</Radio.Group>
		)
	}
}

export default withRouter(Navigate)

