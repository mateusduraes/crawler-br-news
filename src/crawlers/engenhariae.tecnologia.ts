import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'http://engenhariae.com.br/category/tecnologia/';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.td-module-title').children()
		.each((index, item) => arr.push({
			title: $(item).text(),
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
