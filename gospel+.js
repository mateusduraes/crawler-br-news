const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.title')
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('https://noticias.gospelmais.com.br/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
