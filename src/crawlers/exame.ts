import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'https://exame.abril.com.br';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.widget-home-box-list-item-title-a')
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
