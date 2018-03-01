import React, { Component } from 'react';


export default class About extends Component {
	state = this.props.location.state;
	render() {
		return(<div>about me{this.state}</div>);
	}
}
