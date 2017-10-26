const requestPromise = require('request-promise')
const cheerio = require('cheerio')
const prettyjson = require('prettyjson')

let getNews = html => {
	let $ = cheerio.load(html)
	let arr = []
	$('.listing-title')
		.each((index, item) => arr.push({
			title: $(item).find('a').attr('title'),	
			link: $(item).find('a').attr('href')
		}))
	return arr
}

requestPromise('https://noticias.r7.com/brasil/noticias')
	.then(getNews)
	.then(prettyjson.render)
	.then(console.log)
