import cheerio from 'cheerio';
import axios from 'axios';

export async function getHTML(url) {
	const { data: html } = await axios.get(url);
	return html;
}
  
export async function getMediumArticles(html) {
	// load up cheerio
	const $ = cheerio.load(html);
	const articles = $('.c.dy.dz.ea.eb.ec');
	let articlesData = [];
	articles.each((i, article) => {
		const title = $(article).find('.eh.ei').find('h1').html();
		const imageUrl = $(article).find('.eh.ei').find('figure img').attr('src');
		const excerpt = $(article).find('.eh.ei').find('p').html();
		const articleData = {
			title: title,
			imageUrl: imageUrl,
			excerpt: excerpt
		}
		articlesData.push(articleData);
	});
	return articlesData.json();
}