const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.widget-home-box-list-item-title-a')
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('https://exame.abril.com.br')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
