const requestPromise = require('request-promise');
const cheerio = require('cheerio');
const prettyjson = require('prettyjson');

export let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('section[class*="block-saiba-agora-"] h3')
		.each((index, item) => arr.push({
			title: $(item).text(),
		}));
	return arr;
};

requestPromise('http://www.estadao.com.br')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log);
