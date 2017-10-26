const requestPromise = require("request-promise");
const cheerio = require("cheerio");
const prettyjson = require("prettyjson");

let getNews = html => {
	let $ = cheerio.load(html);
	let arr = [];
	$('[data-destaque="titulo"]')
		.each((index, item) => arr.push({
			link : $(item).closest('[data-destaque="link"]').attr("href"),
			title: $(item).text(),
		}));
	return arr;
};

requestPromise("http://www.em.com.br/")
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log);
