import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../config/config';
import { getBlog, getList } from '../../config/methods';


class Posts extends Component {
	constructor() {
		super();
		this.state = {

		};
	};

	componentWillMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});
	};

	render() {
		return (<div dangerouslySetInnerHTML={{__html:marked(this.props.location.state.desc)}}></div>)
	}
}
export default Posts
