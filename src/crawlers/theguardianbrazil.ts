import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

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

const get = () => {
	requestPromise('https://www.theguardian.com/world/brazil')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };

