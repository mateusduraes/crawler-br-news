const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.lista-promocoes .informacoes')
		.each((index, item) => arr.push({
			title: String($(item).find('h3').text()).trim(),
			preco: String($(item).find('.preco').text().trim()),
			url: String($(item).find('h3').find('a').attr('href')).trim()
		}))
	return arr
}

requestPromise('https://gatry.com/')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
