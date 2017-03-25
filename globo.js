const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.feed-post-body-title')
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('http://www.g1.globo.com')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
