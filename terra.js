const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.news .title .text')
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('https://www.terra.com.br/noticias/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
