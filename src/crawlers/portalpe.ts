import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.texto7.strong.espace1 a')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim(),
		}));
	return arr;
};

const get = () => {
	requestPromise('http://portalpe10.com.br/')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
