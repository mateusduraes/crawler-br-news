const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('#content .title a')
		.each((index, item) => arr.push({
			title: String($(item).text()).trim() // clean extra white space at the beginning
		}))
	return arr
}

requestPromise('https://imasters.com.br/secao/linguagens/java/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
