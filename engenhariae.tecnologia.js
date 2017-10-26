const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.td-module-title').children()
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('http://engenhariae.com.br/category/tecnologia/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
