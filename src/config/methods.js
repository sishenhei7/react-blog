import fetch from 'isomorphic-fetch';
import { apiUrl, colorStore } from './config';

export function getBlog() {
	return (
		fetch(apiUrl)
			.then(response => response.json())
	);
};

export function getList(json) {
	return (json.map(item => ({
		num: item.number,
		title: item.title,
		tag: item.labels[0].name,
		color: item.labels[0].color,
		date: item.created_at.substring(0, 10),
		desc: item.body
	})));
}

//default: 'red'
export function getColor(color) {
	return colorStore[color] || 'red'
}

//查找h3建立目录，没有则返回null
export function getCatalog(desc) {
	const h3Content = desc.match(/###\s(.+)/g);
	return !h3Content ? [] : h3Content.map((item) => (item.replace(/###/g,'')))
}

//给h3加上锚点
export function setAnchor(desc) {
	let num = 0;
	let helpAnchor = [];
	const descArray = desc.split(/<h3 id=".*">/);
	descArray.map((item) => {
		if(num) {
			helpAnchor.push(`<h3 id="anchor${num}">`)
		}
		helpAnchor.push(item);
		num = num + 1;
		return null;
	})
	return helpAnchor.join('')
}

//找到锚点并跳转的函数
export function scrollToAnchor(anchorName){
	if (anchorName) {
	    // 找到锚点
	    let anchorElement = document.getElementById(anchorName);
	    // 如果对应id的锚点存在，就跳转到锚点
	    if(anchorElement) { anchorElement.scrollIntoView(); }
	}
}
