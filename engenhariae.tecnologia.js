const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')
$('.td-module-title').children().each((index, item) => console.log(item.innerText))
let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.td-module-title')
		.each((index, item) => arr.push({
			title: $(item).text()			
		}))
	return arr
}

requestPromise('http://engenhariae.com.br/category/tecnologia/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
