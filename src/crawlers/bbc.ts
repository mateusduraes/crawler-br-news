import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'http://bbc.com';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('a.title-link')
		.each((index, item) => arr.push({
			title: $(item).text().trim(),
			link : url + $(item).attr('href'),
		}));
	return arr;
};


const crawlerInfo: ICrawlerInfo = {
	get: () => {
		requestPromise(url + '/portuguese/brasil')
			.then(getNews)
			.then(prettyjson.render)
			.then(console.log);
	},
	url,
};

export default crawlerInfo;
