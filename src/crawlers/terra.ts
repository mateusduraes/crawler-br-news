import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.news .title .text')
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};

const get = () => {
	requestPromise('https://www.terra.com.br/noticias/')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
