import * as cheerio from 'cheerio';
import * as prettyjson from 'prettyjson';
import * as requestPromise from 'request-promise';

const bbcUrl = 'http://bbc.com';

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('a.title-link')
		.each((index, item) => arr.push({
			title: $(item).text().trim(),
			link : bbcUrl + $(item).attr('href'),
		}));
	return arr;
};

const get = () => {
	requestPromise(bbcUrl + '/portuguese/brasil')
		.then(getNews)
		.then(prettyjson.render)
		.then(console.log);
};

export { get };
