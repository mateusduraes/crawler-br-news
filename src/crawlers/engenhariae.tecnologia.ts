import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.td-module-title').children()
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};

const get = () => {
	requestPromise('http://engenhariae.com.br/category/tecnologia/')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
