import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';
import { ICrawlerInfo } from './../types/crawler-info';

const url: string = 'https://gatry.com/';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.lista-promocoes .informacoes')
		.each((index, item) => arr.push({
			title: String($(item).find('h3').text()).trim(),
			preco: String($(item).find('.preco').text().trim()),
			url: String($(item).find('h3').find('a').attr('href')).trim(),
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
