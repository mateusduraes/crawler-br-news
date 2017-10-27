import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

export let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('section[class*="block-saiba-agora-"] h3')
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};


const get = () => {
	requestPromise('http://www.estadao.com.br')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
