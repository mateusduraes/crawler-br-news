import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'https://noticias.r7.com/brasil/noticias';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.listing-title')
		.each((index, item) => arr.push({
			title: $(item).find('a').attr('title'),
			link: $(item).find('a').attr('href'),
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

