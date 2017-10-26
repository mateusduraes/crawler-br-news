const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('a.js-headline-text')
		.each((index, item) => arr.push({
			title: $(item).text(),
			link : $(item).attr('href')
		}))
	return arr
}

requestPromise('https://www.theguardian.com/world/brazil')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
