import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.overheadline h1, .headlines h3')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim(),
		}));
	return arr;
};

const get = () => {
	requestPromise('http://www.folha.uol.com.br')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };

