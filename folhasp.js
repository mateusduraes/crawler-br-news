const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.overheadline h1, .headlines h3')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim() // clean extra white space at the beginning
		}))
	return arr
}

requestPromise('http://www.folha.uol.com.br')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
