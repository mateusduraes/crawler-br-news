import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'https://www.theguardian.com/world/brazil';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('a.js-headline-text')
		.each((index, item) => arr.push({
			title: $(item).text(),
			link : $(item).attr('href'),
		}));
	return arr;
};

const crawlerInfo: ICrawlerInfo = {
    get: () => {
		requestPromise(url)
			.then(getNews)
			.then(prettyjson.render)
			.then(console.log);
	},
    url,
};

export default crawlerInfo;

