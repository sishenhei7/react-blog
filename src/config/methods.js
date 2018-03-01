import fetch from 'isomorphic-fetch';
import { apiUrl } from './config'

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
		date: item.created_at,
		desc: item.body
	})));
}

