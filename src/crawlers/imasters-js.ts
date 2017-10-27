import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'https://imasters.com.br/secao/front-end/javascript/';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('#content .title a')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim(),
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
