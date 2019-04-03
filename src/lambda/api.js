import axios from 'axios';
import { getHTML, getMediumArticles } from './helpers';

export function handler(event, context, callback) {
	axios.get('https://medium.com/@Jason_Matthew')
		.then(response => {
			// const articles = getMediumArticles(response)
			callback(null, {
				statusCode: 200,
	  			body: JSON.stringify(response)
			})
		})
		.catch(err => {
			console.log(err);
			callback(new Error('Oops somthing went wrong'));
		})
}