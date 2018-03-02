import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Radio } from 'antd';
import { getBlog, getList } from '../../config/methods';

const navigateConfig = [{
	value: "文档",
	icon: "edit",
	content: "文档"
}, {
	value: "学习",
	icon: "bulb",
	content: "学习"
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
			'文档': {pathname:'/', state:this.state.blogList},
			'学习': '/learning',
			'关于': '/about'
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

