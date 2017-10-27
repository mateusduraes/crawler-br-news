import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('.m-headline')
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};

const get = () => {
	requestPromise('https://gauchazh.clicrbs.com.br/')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
