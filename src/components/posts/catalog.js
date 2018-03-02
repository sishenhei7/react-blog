import React, { Component } from 'react';
import { Menu, Icon, Affix, Dropdown, Button } from 'antd';
import { getCatalog } from '../../config/methods';

class Catalog extends Component {
	constructor() {
		super();
		this.state = {
			content: '',
		};
	};

	scrollToAnchor(anchorName){
		if (anchorName) {
		    // 找到锚点
		    let anchorElement = document.getElementById(anchorName);
		    // 如果对应id的锚点存在，就跳转到锚点
		    if(anchorElement) { anchorElement.scrollIntoView(); }
		}
	}

	render() {
		let num = 0;
		const catalog = getCatalog(this.props.desc);

		const menu = (
		  <Menu>
		  	{catalog.map((item) => {
		  		num = num + 1;
		  		return(
		  			<Menu.Item key={num}><a onClick={this.scrollToAnchor.bind(this, `anchor${num}`)}>{`[${num}]${item}`}</a></Menu.Item>
		  		)})}
		  </Menu>
		);

		return (
			<Affix offsetTop={120} className='Catalog-wrapper'>
			  <Dropdown overlay={menu} trigger={['click']}>
			    <Button type="primary">
			      <Icon type="profile" />目录 <Icon type="down" />
			    </Button>
			  </Dropdown>
			</Affix>
		)
	}
}
export default Catalog
