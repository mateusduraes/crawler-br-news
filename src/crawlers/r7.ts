import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

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

const get = () => {
	requestPromise('https://noticias.r7.com/brasil/noticias')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
