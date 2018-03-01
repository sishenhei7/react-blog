import React, { Component } from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import fetch from 'isomorphic-fetch';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			content: '',
		};
	};

	componentWillMount() {
		marked.setOptions({
			highlight: code => hljs.highlightAuto(code).value
		});

		let url = `https://api.github.com/repos/sishenhei7/sishenhei7.github.io/issues`;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				const mdcontent = json[0].body;
				console.log(json[0]);
				this.setState({ content: mdcontent });

			});
		console.log('fadfsaf1');
	};

	componentDidMount() {
		console.log('fadfsaf2');
	};

	render() {
		return (<div dangerouslySetInnerHTML={{__html:marked(this.state.content)}}></div>)
	}
}
export default Posts
