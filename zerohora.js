const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.m-headline')
		.each((index, item) => arr.push({
			title: $(item).text()
		}))
	return arr
}

requestPromise('https://gauchazh.clicrbs.com.br/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
