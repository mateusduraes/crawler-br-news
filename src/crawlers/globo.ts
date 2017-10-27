import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

export let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.feed-post-body-title')
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};

const get = () => {
	requestPromise('http://www.g1.globo.com')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
